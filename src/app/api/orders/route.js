import pool from '../../../lib/db';
import { NextResponse } from 'next/server';

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

      // Create order items
      const orderItems = items.map((item) => [
        orderId,
        item.product_id,
        item.name,
        item.price,
        item.quantity,
        item.price * item.quantity, // subtotal
      ]);

      await connection.execute(
        `INSERT INTO order_items (
          order_id, product_id, product_name, product_price, quantity, subtotal
        ) VALUES ?`,
        [orderItems]
      );

      // Commit transaction
      await connection.commit();

      // Get the created order with items
      const [order] = await connection.execute(
        `SELECT o.*, 
         JSON_ARRAYAGG(
           JSON_OBJECT(
             'id', oi.id,
             'product_id', oi.product_id,
             'product_name', oi.product_name,
             'quantity', oi.quantity,
             'price', oi.product_price
           )
         ) as items
         FROM orders o
         LEFT JOIN order_items oi ON o.id = oi.order_id
         WHERE o.id = ?
         GROUP BY o.id`,
        [orderId]
      );

      connection.release();

      // Send WhatsApp notification
      try {
        const { sendOrderNotification } = await import('../../../lib/whatsapp');
        await sendOrderNotification(
          {
            id: orderId,
            order_number: orderNumber,
            mobile: mobileNumber,
            email: email || null,
            address: address || null,
            total: parseFloat(total),
            status: 'pending',
            items: items,
          },
          mobileNumber
        );
      } catch (whatsappError) {
        console.error('WhatsApp notification error (non-critical):', whatsappError);
        // Don't fail the order if WhatsApp fails
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
    return NextResponse.json(
      { success: false, error: 'Failed to create order' },
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
      query += ' AND o.status = ?';
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
