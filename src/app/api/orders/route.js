import pool from '../../../lib/db';
import { NextResponse } from 'next/server';
import { sendEmail } from '../../../lib/email';

// Admin email for order notifications
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || process.env.ORDER_ADMIN_EMAIL || 'nkarthikeyan@live.com';

// POST create new order
export async function POST(request) {
  try {
    const body = await request.json();
    const { mobile, email, address, items, total } = body;

    // Validation
    if (!mobile || !items || items.length === 0) {
      return NextResponse.json(
        { success: false, error: 'Mobile number and items are required' },
        { status: 400 }
      );
    }

    // Validate mobile number (10 digits)
    const mobileNumber = mobile.replace(/\D/g, '');
    if (mobileNumber.length !== 10) {
      return NextResponse.json(
        { success: false, error: 'Invalid mobile number' },
        { status: 400 }
      );
    }

    // Start transaction
    const connection = await pool.getConnection();
    await connection.beginTransaction();

    try {
      // Generate order number
      const orderNumber = `ORD-${Date.now()}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
      
      // Create order (adapting to existing schema)
      const [orderResult] = await connection.execute(
        `INSERT INTO orders (
          order_number, customer_name, customer_email, customer_phone, 
          shipping_address, subtotal, total, order_status, payment_method, created_at
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, NOW())`,
        [
          orderNumber,
          'Customer', // Default name, can be updated later
          email || 'noemail@example.com',
          mobileNumber,
          address || 'Address not provided',
          parseFloat(total),
          parseFloat(total),
          'pending', // pending, processing, shipped, delivered, cancelled
          'cod', // Cash on delivery
        ]
      );

      const orderId = orderResult.insertId;

      // Create order items (mysql2 requires explicit placeholders for bulk insert)
      const placeholders = items.map(() => '(?, ?, ?, ?, ?, ?)').join(', ');
      const orderItemValues = items.flatMap((item) => [
        orderId,
        item.product_id,
        item.name || 'Product',
        parseFloat(item.price) || 0,
        parseInt(item.quantity, 10) || 1,
        (parseFloat(item.price) || 0) * (parseInt(item.quantity, 10) || 1),
      ]);

      await connection.execute(
        `INSERT INTO order_items (
          order_id, product_id, product_name, product_price, quantity, subtotal
        ) VALUES ${placeholders}`,
        orderItemValues
      );

      // Commit transaction
      await connection.commit();

      connection.release();

      // Send email to admin with order details
      const adminEmailHtml = `
        <h2>🛒 New Order Received</h2>
        <p><strong>Order ID:</strong> #${orderNumber}</p>
        <p><strong>Mobile:</strong> ${mobileNumber}</p>
        <p><strong>Email:</strong> ${email || '—'}</p>
        <p><strong>Address:</strong> ${address || '—'}</p>
        <p><strong>Total:</strong> ₹${parseFloat(total).toFixed(2)}</p>
        <h3>Items:</h3>
        <ul>
          ${items.map((i, idx) => `<li>${i.name || 'Product'} × ${i.quantity} = ₹${(parseFloat(i.price) || 0) * (parseInt(i.quantity, 10) || 1)}</li>`).join('')}
        </ul>
      `;
      sendEmail({ to: ADMIN_EMAIL, subject: `New Order #${orderNumber} - Muttaikadai`, html: adminEmailHtml }).catch((e) =>
        console.error('Admin email error:', e)
      );

      // Send order confirmation email to customer (if email provided)
      if (email && email.trim() && email !== 'noemail@example.com') {
        const customerEmailHtml = `
          <h2>✅ Order Confirmed!</h2>
          <p>Thank you for your order. Your order <strong>#${orderNumber}</strong> has been received.</p>
          <p><strong>Total:</strong> ₹${parseFloat(total).toFixed(2)}</p>
          <p><strong>Items:</strong></p>
          <ul>
            ${items.map((i) => `<li>${i.name || 'Product'} × ${i.quantity}</li>`).join('')}
          </ul>
          <p>We'll notify you once your order is ready for delivery.</p>
          <p>Thank you for shopping with Muttaikadai! 🥚</p>
        `;
        sendEmail({ to: email.trim(), subject: `Order Confirmed #${orderNumber} - Muttaikadai`, html: customerEmailHtml }).catch((e) =>
          console.error('Customer email error:', e)
        );
      }

      return NextResponse.json(
        {
          success: true,
          order: {
            id: orderId,
            order_number: orderNumber,
            mobile: mobileNumber,
            email: email || null,
            address: address || null,
            total: parseFloat(total),
            status: 'pending',
            items: items,
          },
        },
        { status: 201 }
      );
    } catch (error) {
      await connection.rollback();
      connection.release();
      throw error;
    }
  } catch (error) {
    console.error('Error creating order:', error);
    const message = process.env.NODE_ENV === 'development' ? error.message : 'Failed to create order';
    return NextResponse.json(
      { success: false, error: message },
      { status: 500 }
    );
  }
}

// GET all orders (for admin)
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const page = Math.max(1, parseInt(searchParams.get('page') || '1', 10) || 1);
    const limit = Math.min(100, Math.max(1, parseInt(searchParams.get('limit') || '20', 10) || 20));
    const status = searchParams.get('status');
    const offset = (page - 1) * limit;

    let query = `
      SELECT o.*, 
       (SELECT COUNT(*) FROM order_items WHERE order_id = o.id) as item_count
      FROM orders o
      WHERE 1=1
    `;
    const params = [];

    if (status) {
      query += ' AND o.order_status = ?';
      params.push(status);
    }

    const safeLimit = Number(limit) || 20;
    const safeOffset = Number(offset) || 0;
    query += ` ORDER BY o.created_at DESC LIMIT ${safeLimit} OFFSET ${safeOffset}`;

    const [orders] = await pool.execute(query, params);

    // Get total count
    const countQuery = query.replace(/SELECT.*FROM/, 'SELECT COUNT(*) as total FROM').split('ORDER BY')[0];
    const [countResult] = await pool.execute(countQuery, params);
    const total = countResult[0].total;

    return NextResponse.json({
      success: true,
      data: orders,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    console.error('Error fetching orders:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch orders' },
      { status: 500 }
    );
  }
}
