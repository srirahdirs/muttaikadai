import pool from '../../../lib/db';
import { NextResponse } from 'next/server';

// GET all categories
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const parentId = searchParams.get('parent_id');
    const isActive = searchParams.get('is_active') !== 'false';

    let query = 'SELECT * FROM categories WHERE 1=1';
    const params = [];

    if (isActive) {
      query += ' AND is_active = ?';
      params.push(true);
    }

    if (parentId) {
      query += ' AND parent_id = ?';
      params.push(parseInt(parentId));
    } else if (parentId === null || parentId === 'null') {
      query += ' AND parent_id IS NULL';
    }

    query += ' ORDER BY sort_order ASC, name ASC';

    const [categories] = await pool.execute(query, params);

    // Get product count for each category
    const categoriesWithCount = await Promise.all(
      categories.map(async (category) => {
        const [countResult] = await pool.execute(
          'SELECT COUNT(*) as count FROM products WHERE category_id = ? AND is_active = ?',
          [category.id, true]
        );
        return {
          ...category,
          quantity: countResult[0].count,
        };
      })
    );

    return NextResponse.json({
      success: true,
      data: categoriesWithCount,
    });
  } catch (error) {
    console.error('Error fetching categories:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch categories' },
      { status: 500 }
    );
  }
}

// POST create new category
export async function POST(request) {
  try {
    const body = await request.json();
    const { name, slug, image_url, description, parent_id, sort_order } = body;

    if (!name || !slug) {
      return NextResponse.json(
        { success: false, error: 'Name and slug are required' },
        { status: 400 }
      );
    }

    const [result] = await pool.execute(
      'INSERT INTO categories (name, slug, image_url, description, parent_id, sort_order) VALUES (?, ?, ?, ?, ?, ?)',
      [name, slug, image_url || null, description || null, parent_id || null, sort_order || 0]
    );

    const [newCategory] = await pool.execute(
      'SELECT * FROM categories WHERE id = ?',
      [result.insertId]
    );

    return NextResponse.json({
      success: true,
      data: newCategory[0],
    }, { status: 201 });
  } catch (error) {
    console.error('Error creating category:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to create category' },
      { status: 500 }
    );
  }
}

