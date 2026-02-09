import pool from '../../../../lib/db';
import { NextResponse } from 'next/server';

// GET single product by ID or slug
export async function GET(request, { params }) {
  try {
    const { id } = params;
    const idNum = parseInt(id);

    let query = `
      SELECT p.*, c.name as category_name, c.slug as category_slug, c.id as category_id
      FROM products p
      LEFT JOIN categories c ON p.category_id = c.id
      WHERE `;
    let params_query = [];

    if (isNaN(idNum)) {
      query += 'p.slug = ?';
      params_query.push(id);
    } else {
      query += 'p.id = ?';
      params_query.push(idNum);
    }

    const [products] = await pool.execute(query, params_query);

    if (products.length === 0) {
      return NextResponse.json(
        { success: false, error: 'Product not found' },
        { status: 404 }
      );
    }

    let product = products[0];

    // Parse gallery_images if it's a JSON string
    if (product.gallery_images && typeof product.gallery_images === 'string') {
      try {
        product.gallery_images = JSON.parse(product.gallery_images);
      } catch (e) {
        product.gallery_images = [];
      }
    }

    // Get product attributes/variations
    const [attributes] = await pool.execute(
      'SELECT * FROM product_attributes WHERE product_id = ?',
      [product.id]
    );
    product.attributes = attributes;

    // Get related products (same category)
    if (product.category_id) {
      const [related] = await pool.execute(
        `SELECT p.* FROM products p 
         WHERE p.category_id = ? AND p.id != ? AND p.is_active = ? 
         LIMIT 4`,
        [product.category_id, product.id, true]
      );
      product.related_products = related;
    }

    return NextResponse.json({
      success: true,
      data: product,
    });
  } catch (error) {
    console.error('Error fetching product:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch product' },
      { status: 500 }
    );
  }
}

// PUT update product
export async function PUT(request, { params }) {
  try {
    const { id } = params;
    const body = await request.json();

    const updateFields = [];
    const updateValues = [];

    const allowedFields = [
      'name',
      'slug',
      'sku',
      'description',
      'short_description',
      'price',
      'sale_price',
      'stock_quantity',
      'stock_status',
      'image_url',
      'gallery_images',
      'category_id',
      'weight',
      'unit',
      'is_featured',
      'is_active',
    ];

    allowedFields.forEach((field) => {
      if (body[field] !== undefined) {
        if (field === 'gallery_images' && Array.isArray(body[field])) {
          updateFields.push(`${field} = ?`);
          updateValues.push(JSON.stringify(body[field]));
        } else {
          updateFields.push(`${field} = ?`);
          updateValues.push(body[field]);
        }
      }
    });

    if (updateFields.length === 0) {
      return NextResponse.json(
        { success: false, error: 'No fields to update' },
        { status: 400 }
      );
    }

    updateValues.push(id);

    const query = `UPDATE products SET ${updateFields.join(', ')} WHERE id = ?`;
    await pool.execute(query, updateValues);

    const [updatedProduct] = await pool.execute(
      'SELECT p.*, c.name as category_name, c.slug as category_slug FROM products p LEFT JOIN categories c ON p.category_id = c.id WHERE p.id = ?',
      [id]
    );

    return NextResponse.json({
      success: true,
      data: updatedProduct[0],
    });
  } catch (error) {
    console.error('Error updating product:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to update product' },
      { status: 500 }
    );
  }
}

// DELETE product
export async function DELETE(request, { params }) {
  try {
    const { id } = params;

    // Check if product is in any orders
    const [orders] = await pool.execute(
      'SELECT COUNT(*) as count FROM order_items WHERE product_id = ?',
      [id]
    );

    if (orders[0].count > 0) {
      // Soft delete instead of hard delete
      await pool.execute('UPDATE products SET is_active = ? WHERE id = ?', [false, id]);
      return NextResponse.json({
        success: true,
        message: 'Product deactivated (soft delete) due to existing orders',
      });
    }

    await pool.execute('DELETE FROM products WHERE id = ?', [id]);

    return NextResponse.json({
      success: true,
      message: 'Product deleted successfully',
    });
  } catch (error) {
    console.error('Error deleting product:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to delete product' },
      { status: 500 }
    );
  }
}

