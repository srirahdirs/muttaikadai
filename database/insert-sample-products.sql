-- Insert Sample Products for the 4 Categories
-- Make sure categories are already inserted first

-- Country Chicken Eggs Products
INSERT INTO products (name, slug, sku, description, short_description, price, sale_price, stock_quantity, category_id, rating, is_featured, image_url, is_active, created_at, updated_at)
SELECT 
  'Country Chicken Eggs - Dozen',
  'country-chicken-eggs-dozen',
  'EGG-CC-001',
  'Fresh country chicken eggs, 12 pieces. Sourced from local farms, these eggs are collected daily to ensure maximum freshness and quality.',
  'Country chicken eggs, 12 pieces',
  10.00,
  NULL,
  100,
  id,
  4.5,
  TRUE,
  '/assets/images/product/1.png',
  TRUE,
  NOW(),
  NOW()
FROM categories WHERE slug = 'country-chicken-eggs';

INSERT INTO products (name, slug, sku, description, short_description, price, sale_price, stock_quantity, category_id, rating, is_featured, image_url, is_active, created_at, updated_at)
SELECT 
  'Country Chicken Eggs - Half Dozen',
  'country-chicken-eggs-half-dozen',
  'EGG-CC-002',
  'Fresh country chicken eggs, 6 pieces. Perfect for small families, collected fresh daily.',
  'Country chicken eggs, 6 pieces',
  5.50,
  NULL,
  80,
  id,
  4.4,
  FALSE,
  '/assets/images/product/2.png',
  TRUE,
  NOW(),
  NOW()
FROM categories WHERE slug = 'country-chicken-eggs';

INSERT INTO products (name, slug, sku, description, short_description, price, sale_price, stock_quantity, category_id, rating, is_featured, image_url, is_active, created_at, updated_at)
SELECT 
  'Country Chicken Eggs - Pack of 30',
  'country-chicken-eggs-pack-30',
  'EGG-CC-003',
  'Fresh country chicken eggs, 30 pieces. Great value pack for large families.',
  'Country chicken eggs, 30 pieces',
  25.00,
  23.00,
  60,
  id,
  4.6,
  TRUE,
  '/assets/images/product/3.png',
  TRUE,
  NOW(),
  NOW()
FROM categories WHERE slug = 'country-chicken-eggs';

-- Country Chicken Eggs (Free Range) Products
INSERT INTO products (name, slug, sku, description, short_description, price, sale_price, stock_quantity, category_id, rating, is_featured, image_url, is_active, created_at, updated_at)
SELECT 
  'Country Chicken Eggs (Free Range) - Dozen',
  'country-chicken-eggs-free-range-dozen',
  'EGG-CC-FR-001',
  'Country chicken eggs (free range), 12 pieces. Hens are free to roam and have access to outdoor space for natural behavior.',
  'Country chicken eggs (free range), 12 pieces',
  12.00,
  NULL,
  50,
  id,
  4.8,
  TRUE,
  '/assets/images/product/2.png',
  TRUE,
  NOW(),
  NOW()
FROM categories WHERE slug = 'country-chicken-eggs-free-range';

INSERT INTO products (name, slug, sku, description, short_description, price, sale_price, stock_quantity, category_id, rating, is_featured, image_url, is_active, created_at, updated_at)
SELECT 
  'Country Chicken Eggs (Free Range) - Half Dozen',
  'country-chicken-eggs-free-range-half-dozen',
  'EGG-CC-FR-002',
  'Country chicken eggs (free range), 6 pieces. From free-range hens that roam freely.',
  'Country chicken eggs (free range), 6 pieces',
  6.50,
  6.00,
  65,
  id,
  4.7,
  FALSE,
  '/assets/images/product/3.png',
  TRUE,
  NOW(),
  NOW()
FROM categories WHERE slug = 'country-chicken-eggs-free-range';

-- Quail Eggs Products
INSERT INTO products (name, slug, sku, description, short_description, price, sale_price, stock_quantity, category_id, rating, is_featured, image_url, is_active, created_at, updated_at)
SELECT 
  'Quail Eggs - Pack of 12',
  'quail-eggs-pack-12',
  'EGG-QL-001',
  'Premium quail eggs, 12 pieces. Delicate, nutritious, and perfect for appetizers or salads.',
  'Quail eggs, 12 pieces',
  8.00,
  NULL,
  45,
  id,
  4.9,
  TRUE,
  '/assets/images/product/2.png',
  TRUE,
  NOW(),
  NOW()
FROM categories WHERE slug = 'quail-eggs';

INSERT INTO products (name, slug, sku, description, short_description, price, sale_price, stock_quantity, category_id, rating, is_featured, image_url, is_active, created_at, updated_at)
SELECT 
  'Quail Eggs - Pack of 24',
  'quail-eggs-pack-24',
  'EGG-QL-002',
  'Premium quail eggs, 24 pieces. Delicate, nutritious, perfect for appetizers or salads.',
  'Quail eggs, 24 pieces',
  15.00,
  14.00,
  35,
  id,
  4.9,
  FALSE,
  '/assets/images/product/3.png',
  TRUE,
  NOW(),
  NOW()
FROM categories WHERE slug = 'quail-eggs';

-- Kadaknath Chicken Eggs Products
INSERT INTO products (name, slug, sku, description, short_description, price, sale_price, stock_quantity, category_id, rating, is_featured, image_url, is_active, created_at, updated_at)
SELECT 
  'Kadaknath Chicken Eggs - Dozen',
  'kadaknath-chicken-eggs-dozen',
  'EGG-KD-001',
  'Premium Kadaknath chicken eggs, 12 pieces. Known for their unique dark color and high nutritional value.',
  'Kadaknath chicken eggs, 12 pieces',
  15.00,
  14.00,
  30,
  id,
  4.7,
  TRUE,
  '/assets/images/product/4.png',
  TRUE,
  NOW(),
  NOW()
FROM categories WHERE slug = 'kadaknath-chicken-eggs';

INSERT INTO products (name, slug, sku, description, short_description, price, sale_price, stock_quantity, category_id, rating, is_featured, image_url, is_active, created_at, updated_at)
SELECT 
  'Kadaknath Chicken Eggs - Half Dozen',
  'kadaknath-chicken-eggs-half-dozen',
  'EGG-KD-002',
  'Premium Kadaknath chicken eggs, 6 pieces. Rich in protein and essential nutrients.',
  'Kadaknath chicken eggs, 6 pieces',
  8.00,
  NULL,
  40,
  id,
  4.6,
  FALSE,
  '/assets/images/product/5.png',
  TRUE,
  NOW(),
  NOW()
FROM categories WHERE slug = 'kadaknath-chicken-eggs';

INSERT INTO products (name, slug, sku, description, short_description, price, sale_price, stock_quantity, category_id, rating, is_featured, image_url, is_active, created_at, updated_at)
SELECT 
  'Kadaknath Chicken Eggs - Pack of 20',
  'kadaknath-chicken-eggs-pack-20',
  'EGG-KD-003',
  'Premium Kadaknath chicken eggs, 20 pieces. High nutritional value with unique taste.',
  'Kadaknath chicken eggs, 20 pieces',
  24.00,
  22.00,
  25,
  id,
  4.8,
  TRUE,
  '/assets/images/product/1.png',
  TRUE,
  NOW(),
  NOW()
FROM categories WHERE slug = 'kadaknath-chicken-eggs';

-- Verify inserted products
-- SELECT p.id, p.name, p.price, c.name as category_name 
-- FROM products p 
-- LEFT JOIN categories c ON p.category_id = c.id 
-- ORDER BY c.name, p.name;

