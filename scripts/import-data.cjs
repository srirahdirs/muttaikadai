/**
 * Import Data Script
 * Imports sample egg product data into MySQL database
 * 
 * Usage: node scripts/import-data.cjs
 */

require('dotenv').config({ path: '.env.local' });
const mysql = require('mysql2/promise');

// Create database connection
const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '2DC1m2cI(0Olof]H',
  database: process.env.DB_NAME || 'muttaikadai_db',
  port: parseInt(process.env.DB_PORT || '3307'),
});

// Helper function to create slug from name
function createSlug(name) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

async function importCategories() {
  console.log('Importing/updating categories...');

  const eggCategories = [
    { name: 'Country Chicken Eggs', slug: 'country-chicken-eggs', description: 'Country chicken eggs', image: '/assets/images/category/1.png' },
    { name: 'Country Chicken Eggs (Free Range)', slug: 'country-chicken-eggs-free-range', description: 'Country chicken eggs (free range eggs)', image: '/assets/images/category/2.png' },
    { name: 'Quail Eggs', slug: 'quail-eggs', description: 'Quail eggs', image: '/assets/images/category/7.png' },
    { name: 'Kadaknath Chicken Eggs', slug: 'kadaknath-chicken-eggs', description: 'Kadaknath chicken eggs', image: '/assets/images/category/4.png' },
  ];

  try {
    let imported = 0;
    for (const cat of eggCategories) {
      const [result] = await pool.execute(
        `INSERT INTO categories (name, slug, description, image_url, is_active) 
         VALUES (?, ?, ?, ?, ?)
         ON DUPLICATE KEY UPDATE 
           name=VALUES(name), 
           description=VALUES(description),
           image_url=VALUES(image_url)`,
        [cat.name, cat.slug, cat.description, cat.image, true]
      );
      if (result.affectedRows > 0) imported++;
    }
    console.log(`✓ Imported/updated ${imported} categories`);
  } catch (error) {
    console.error('Error importing categories:', error.message);
  }
}

async function importSampleProducts() {
  console.log('Importing sample products...');

  // Sample egg products
  const sampleProducts = [
    {
      name: 'Country Chicken Eggs - Dozen',
      slug: 'country-chicken-eggs-dozen',
      sku: 'EGG-CC-001',
      description: 'Fresh country chicken eggs, 12 pieces. Sourced from local farms, these eggs are collected daily to ensure maximum freshness and quality.',
      short_description: 'Country chicken eggs, 12 pieces',
      price: 10.00,
      sale_price: null,
      stock_quantity: 100,
      category_slug: 'country-chicken-eggs',
      rating: 4.5,
      is_featured: true,
      image: '/assets/images/product/1.png',
    },
    {
      name: 'Country Chicken Eggs (Free Range) - Half Dozen',
      slug: 'country-chicken-eggs-free-range-half-dozen',
      sku: 'EGG-CC-FR-001',
      description: 'Country chicken eggs (free range), 6 pieces. From free-range hens that roam freely.',
      short_description: 'Country chicken eggs (free range), 6 pieces',
      price: 8.50,
      sale_price: 7.50,
      stock_quantity: 75,
      category_slug: 'country-chicken-eggs-free-range',
      rating: 5.0,
      is_featured: true,
      image: '/assets/images/product/2.png',
    },
    {
      name: 'Country Chicken Eggs (Free Range) - Dozen',
      slug: 'country-chicken-eggs-free-range-dozen',
      sku: 'EGG-CC-FR-002',
      description: 'Country chicken eggs (free range), 12 pieces. Hens are free to roam and have access to outdoor space.',
      short_description: 'Country chicken eggs (free range), 12 pieces',
      price: 12.00,
      sale_price: null,
      stock_quantity: 50,
      category_slug: 'country-chicken-eggs-free-range',
      rating: 4.8,
      is_featured: false,
      image: '/assets/images/product/3.png',
    },
    {
      name: 'Quail Eggs - Pack of 12',
      slug: 'quail-eggs-pack-12',
      sku: 'EGG-QL-001',
      description: 'Premium quail eggs, 12 pieces. Delicate, nutritious, and perfect for appetizers or salads.',
      short_description: 'Quail eggs, 12 pieces',
      price: 8.00,
      sale_price: null,
      stock_quantity: 45,
      category_slug: 'quail-eggs',
      rating: 4.9,
      is_featured: true,
      image: '/assets/images/product/2.png',
    },
    {
      name: 'Kadaknath Chicken Eggs - Dozen',
      slug: 'kadaknath-chicken-eggs-dozen',
      sku: 'EGG-KD-001',
      description: 'Premium Kadaknath chicken eggs, 12 pieces. Known for their unique dark color and high nutritional value.',
      short_description: 'Kadaknath chicken eggs, 12 pieces',
      price: 15.00,
      sale_price: 14.00,
      stock_quantity: 30,
      category_slug: 'kadaknath-chicken-eggs',
      rating: 4.7,
      is_featured: true,
      image: '/assets/images/product/4.png',
    },
    {
      name: 'Kadaknath Chicken Eggs - Half Dozen',
      slug: 'kadaknath-chicken-eggs-half-dozen',
      sku: 'EGG-KD-002',
      description: 'Premium Kadaknath chicken eggs, 6 pieces. Rich in protein and essential nutrients.',
      short_description: 'Kadaknath chicken eggs, 6 pieces',
      price: 8.00,
      sale_price: null,
      stock_quantity: 40,
      category_slug: 'kadaknath-chicken-eggs',
      rating: 4.6,
      is_featured: false,
      image: '/assets/images/product/5.png',
    },
    {
      name: 'Quail Eggs - Pack of 24',
      slug: 'quail-eggs-pack-24',
      sku: 'EGG-QL-002',
      description: 'Premium quail eggs, 24 pieces. Delicate, nutritious, perfect for appetizers or salads.',
      short_description: 'Quail eggs, 24 pieces',
      price: 15.00,
      sale_price: 14.00,
      stock_quantity: 35,
      category_slug: 'quail-eggs',
      rating: 4.9,
      is_featured: false,
      image: '/assets/images/product/3.png',
    },
  ];

  try {
    let imported = 0;
    for (const product of sampleProducts) {
      // Get category ID
      const [categories] = await pool.execute(
        'SELECT id FROM categories WHERE slug = ?',
        [product.category_slug]
      );

      if (categories.length === 0) {
        console.warn(`  ⚠ Category not found: ${product.category_slug}, skipping: ${product.name}`);
        continue;
      }

      const categoryId = categories[0].id;

      // Insert product
      const [result] = await pool.execute(
        `INSERT INTO products (
          name, slug, sku, description, short_description, price, sale_price,
          stock_quantity, stock_status, image_url, category_id, rating,
          is_featured, unit, is_active
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        ON DUPLICATE KEY UPDATE
          name=VALUES(name),
          description=VALUES(description),
          price=VALUES(price),
          sale_price=VALUES(sale_price),
          stock_quantity=VALUES(stock_quantity),
          rating=VALUES(rating),
          is_featured=VALUES(is_featured)`,
        [
          product.name,
          product.slug,
          product.sku,
          product.description,
          product.short_description,
          product.price,
          product.sale_price,
          product.stock_quantity,
          'in_stock',
          product.image,
          categoryId,
          product.rating,
          product.is_featured,
          'piece',
          true,
        ]
      );
      if (result.affectedRows > 0) imported++;
    }

    console.log(`✓ Imported ${imported} sample products`);
  } catch (error) {
    console.error('Error importing products:', error.message);
    throw error;
  }
}

async function main() {
  console.log('🚀 Starting data import...\n');

  try {
    // Test connection
    const connection = await pool.getConnection();
    console.log('✓ Database connected successfully\n');
    connection.release();

    // Import data
    await importCategories();
    console.log('');
    await importSampleProducts();

    console.log('\n✅ Data import completed!\n');

    // Show summary
    const [categoryCount] = await pool.execute('SELECT COUNT(*) as count FROM categories WHERE is_active = 1');
    const [productCount] = await pool.execute('SELECT COUNT(*) as count FROM products WHERE is_active = 1');

    console.log('📊 Summary:');
    console.log(`   Categories: ${categoryCount[0].count}`);
    console.log(`   Products: ${productCount[0].count}`);
    console.log('\n✨ You can now test the API endpoints!');
    console.log('   Categories: http://localhost:3000/api/categories');
    console.log('   Products: http://localhost:3000/api/products\n');

  } catch (error) {
    console.error('\n❌ Error:', error.message);
    if (error.code === 'ECONNREFUSED') {
      console.error('   Make sure MySQL is running in XAMPP!');
    } else if (error.code === 'ER_BAD_DB_ERROR') {
      console.error('   Make sure the database exists! Run schema.sql first.');
    }
    process.exit(1);
  } finally {
    await pool.end();
  }
}

main();



