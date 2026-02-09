import pool from '../../../lib/db';
import { NextResponse } from 'next/server';

// GET all products with filters
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const categoryId = searchParams.get('category_id');
    const categorySlug = searchParams.get('category'); // Support category slug
    const featured = searchParams.get('featured');
    const isActive = searchParams.get('is_active') !== 'false';
    const search = searchParams.get('search');
    const minPrice = searchParams.get('min_price');
    const maxPrice = searchParams.get('max_price');
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '12');
    const sort = searchParams.get('sort') || 'created_at'; // price_asc, price_desc, name, created_at
    const offset = (page - 1) * limit;

    let query = `
      SELECT p.*, c.name as category_name, c.slug as category_slug
      FROM products p
      LEFT JOIN categories c ON p.category_id = c.id
      WHERE 1=1
    `;
    const params = [];

    if (isActive) {
      query += ' AND p.is_active = ?';
      params.push(true);
    }

    if (categoryId) {
      query += ' AND p.category_id = ?';
      params.push(parseInt(categoryId));
    } else if (categorySlug) {
      // Filter by category slug
      query += ' AND c.slug = ?';
      params.push(categorySlug);
    }

    if (featured === 'true') {
      query += ' AND p.is_featured = ?';
      params.push(true);
    }

    if (search) {
      query += ' AND (p.name LIKE ? OR p.description LIKE ? OR p.sku LIKE ?)';
      const searchTerm = `%${search}%`;
      params.push(searchTerm, searchTerm, searchTerm);
    }

    if (minPrice) {
      query += ' AND (CASE WHEN p.sale_price IS NOT NULL THEN p.sale_price ELSE p.price END) >= ?';
      params.push(parseFloat(minPrice));
    }

    if (maxPrice) {
      query += ' AND (CASE WHEN p.sale_price IS NOT NULL THEN p.sale_price ELSE p.price END) <= ?';
      params.push(parseFloat(maxPrice));
    }

    // Sorting
    const sortMap = {
      price_asc: 'ORDER BY (CASE WHEN p.sale_price IS NOT NULL THEN p.sale_price ELSE p.price END) ASC',
      price_desc: 'ORDER BY (CASE WHEN p.sale_price IS NOT NULL THEN p.sale_price ELSE p.price END) DESC',
      name: 'ORDER BY p.name ASC',
      created_at: 'ORDER BY p.created_at DESC',
      rating: 'ORDER BY p.rating DESC',
    };
    query += ' ' + (sortMap[sort] || sortMap.created_at);

    // Get total count for pagination
    const countQuery = query.replace(/SELECT.*FROM/, 'SELECT COUNT(*) as total FROM');
    const countQueryWithoutOrder = countQuery.split('ORDER BY')[0];
    const [countResult] = await pool.execute(countQueryWithoutOrder, params);
    const total = countResult[0].total;

    // Add limit and offset
    query += ' LIMIT ? OFFSET ?';
    params.push(limit, offset);

    const [products] = await pool.execute(query, params);

    return NextResponse.json({
      success: true,
      data: products,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    console.error('Error fetching products:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch products' },
      { status: 500 }
    );
  }
}

// POST create new product
export async function POST(request) {
  try {
    const body = await request.json();
    const {
      name,
      slug,
      sku,
      description,
      short_description,
      price,
      sale_price,
      stock_quantity,
      stock_status,
      image_url,
      gallery_images,
      category_id,
      weight,
      unit,
      is_featured,
    } = body;

    if (!name || !slug || !price) {
      return NextResponse.json(
        { success: false, error: 'Name, slug, and price are required' },
        { status: 400 }
      );
    }

    const [result] = await pool.execute(
      `INSERT INTO products (
        name, slug, sku, description, short_description, price, sale_price,
        stock_quantity, stock_status, image_url, gallery_images, category_id,
        weight, unit, is_featured
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        name,
        slug,
        sku || null,
        description || null,
        short_description || null,
        price,
        sale_price || null,
        stock_quantity || 0,
        stock_status || 'in_stock',
        image_url || null,
        gallery_images ? JSON.stringify(gallery_images) : null,
        category_id || null,
        weight || null,
        unit || 'piece',
        is_featured || false,
      ]
    );

    const [newProduct] = await pool.execute(
      'SELECT p.*, c.name as category_name, c.slug as category_slug FROM products p LEFT JOIN categories c ON p.category_id = c.id WHERE p.id = ?',
      [result.insertId]
    );

    return NextResponse.json(
      {
        success: true,
        data: newProduct[0],
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error creating product:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to create product' },
      { status: 500 }
    );
  }
}

