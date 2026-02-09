import pool from '../../../../lib/db';
import { NextResponse } from 'next/server';

// GET admin dashboard stats
export async function GET() {
  try {
    const [productsResult] = await pool.execute(
      'SELECT COUNT(*) as total FROM products WHERE is_active = 1'
    );

    const [categoriesResult] = await pool.execute(
      'SELECT COUNT(*) as total FROM categories WHERE is_active = 1'
    );

    const [ordersResult] = await pool.execute(
      'SELECT COUNT(*) as total FROM orders'
    );

    const [usersResult] = await pool.execute(
      'SELECT COUNT(*) as total FROM users WHERE role = "customer"'
    );

    const [revenueResult] = await pool.execute(
      'SELECT COALESCE(SUM(total), 0) as total FROM orders WHERE payment_status = "paid"'
    );

    const [todayOrdersResult] = await pool.execute(
      'SELECT COUNT(*) as total FROM orders WHERE DATE(created_at) = CURDATE()'
    );

    return NextResponse.json({
      success: true,
      data: {
        products: productsResult[0].total,
        categories: categoriesResult[0].total,
        orders: ordersResult[0].total,
        users: usersResult[0].total,
        revenue: parseFloat(revenueResult[0].total),
        todayOrders: todayOrdersResult[0].total,
      },
    });
  } catch (error) {
    console.error('Error fetching stats:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch stats' },
      { status: 500 }
    );
  }
}

