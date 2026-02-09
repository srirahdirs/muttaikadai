import pool from '../../../../lib/db';
import { NextResponse } from 'next/server';

// GET single category by ID or slug
export async function GET(request, { params }) {
  try {
    const { id } = params;
    const idNum = parseInt(id);

    let query = 'SELECT * FROM categories WHERE ';
    let params_query = [];

    if (isNaN(idNum)) {
      // If not a number, treat as slug
      query += 'slug = ?';
      params_query.push(id);
    } else {
      query += 'id = ?';
      params_query.push(idNum);
    }

    const [categories] = await pool.execute(query, params_query);

    if (categories.length === 0) {
      return NextResponse.json(
        { success: false, error: 'Category not found' },
        { status: 404 }
      );
    }

    // Get product count
    const [countResult] = await pool.execute(
      'SELECT COUNT(*) as count FROM products WHERE category_id = ? AND is_active = ?',
      [categories[0].id, true]
    );

    const category = {
      ...categories[0],
      quantity: countResult[0].count,
    };

    return NextResponse.json({
      success: true,
      data: category,
    });
  } catch (error) {
    console.error('Error fetching category:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch category' },
      { status: 500 }
    );
  }
}

// PUT update category
export async function PUT(request, { params }) {
  try {
    const { id } = params;
    const body = await request.json();
    const { name, slug, image_url, description, parent_id, sort_order, is_active } = body;

    const updateFields = [];
    const updateValues = [];

    if (name !== undefined) {
      updateFields.push('name = ?');
      updateValues.push(name);
    }
    if (slug !== undefined) {
      updateFields.push('slug = ?');
      updateValues.push(slug);
    }
    if (image_url !== undefined) {
      updateFields.push('image_url = ?');
      updateValues.push(image_url);
    }
    if (description !== undefined) {
      updateFields.push('description = ?');
      updateValues.push(description);
    }
    if (parent_id !== undefined) {
      updateFields.push('parent_id = ?');
      updateValues.push(parent_id);
    }
    if (sort_order !== undefined) {
      updateFields.push('sort_order = ?');
      updateValues.push(sort_order);
    }
    if (is_active !== undefined) {
      updateFields.push('is_active = ?');
      updateValues.push(is_active);
    }

    if (updateFields.length === 0) {
      return NextResponse.json(
        { success: false, error: 'No fields to update' },
        { status: 400 }
      );
    }

    updateValues.push(id);

    const query = `UPDATE categories SET ${updateFields.join(', ')} WHERE id = ?`;
    await pool.execute(query, updateValues);

    const [updatedCategory] = await pool.execute(
      'SELECT * FROM categories WHERE id = ?',
      [id]
    );

    return NextResponse.json({
      success: true,
      data: updatedCategory[0],
    });
  } catch (error) {
    console.error('Error updating category:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to update category' },
      { status: 500 }
    );
  }
}

// DELETE category
export async function DELETE(request, { params }) {
  try {
    const { id } = params;

    // Check if category has products
    const [products] = await pool.execute(
      'SELECT COUNT(*) as count FROM products WHERE category_id = ?',
      [id]
    );

    if (products[0].count > 0) {
      return NextResponse.json(
        { success: false, error: 'Cannot delete category with existing products' },
        { status: 400 }
      );
    }

    await pool.execute('DELETE FROM categories WHERE id = ?', [id]);

    return NextResponse.json({
      success: true,
      message: 'Category deleted successfully',
    });
  } catch (error) {
    console.error('Error deleting category:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to delete category' },
      { status: 500 }
    );
  }
}

