-- Replace all products with the new list
--
-- Run order:
-- 1. Ensure database and tables exist (schema.sql)
-- 2. Ensure the 4 categories exist: country-chicken-eggs, country-chicken-eggs-free-range, quail-eggs, kadaknath-chicken-eggs
--    (schema.sql or update-categories.sql)
-- 3. If you have order_items:  DELETE FROM order_items;
-- 4. Run this script
--
-- Categories used:
--   country-chicken-eggs        -> Country chicken eggs (cage free) 6nos, 12nos
--   country-chicken-eggs-free-range -> Country chicken eggs (free range) 6nos, 12nos
--   quail-eggs                 -> Quail eggs 12nos, 24nos
--   kadaknath-chicken-eggs     -> Kadaknath chicken eggs (cage free) 6nos, 12nos

USE muttaikadai_db;

-- Remove existing products (will fail if order_items reference them; delete order_items first)
DELETE FROM products;

-- 1. Country chicken eggs (cage free) (6 nos) (16/piece): ₹96
-- Category: country-chicken-eggs
INSERT INTO products (name, slug, sku, description, short_description, price, stock_quantity, category_id, is_active, is_featured, image_url)
SELECT
  'Country chicken eggs (cage free) (6 nos)',
  'country-chicken-eggs-cage-free-6-nos',
  'EGG-CC-CF-6',
  'Fresh country chicken eggs, cage free. 6 nos, ₹16/piece.',
  '16/piece',
  96.00,
  100,
  (SELECT id FROM categories WHERE slug = 'country-chicken-eggs' LIMIT 1),
  TRUE,
  TRUE,
  '/assets/images/product/1.png'
WHERE EXISTS (SELECT 1 FROM categories WHERE slug = 'country-chicken-eggs');

-- 2. Country chicken eggs (cage free) (12 nos) (15/piece): ₹180
INSERT INTO products (name, slug, sku, description, short_description, price, stock_quantity, category_id, is_active, is_featured, image_url)
SELECT
  'Country chicken eggs (cage free) (12 nos)',
  'country-chicken-eggs-cage-free-12-nos',
  'EGG-CC-CF-12',
  'Fresh country chicken eggs, cage free. 12 nos, ₹15/piece.',
  '15/piece',
  180.00,
  100,
  (SELECT id FROM categories WHERE slug = 'country-chicken-eggs' LIMIT 1),
  TRUE,
  TRUE,
  '/assets/images/product/1.png'
WHERE EXISTS (SELECT 1 FROM categories WHERE slug = 'country-chicken-eggs');

-- 3. Country chicken eggs (free range) (6 nos) (25/piece): ₹150
-- Category: country-chicken-eggs-free-range
INSERT INTO products (name, slug, sku, description, short_description, price, stock_quantity, category_id, is_active, is_featured, image_url)
SELECT
  'Country chicken eggs (free range) (6 nos)',
  'country-chicken-eggs-free-range-6-nos',
  'EGG-CC-FR-6',
  'Fresh country chicken eggs, free range. 6 nos, ₹25/piece.',
  '25/piece',
  150.00,
  100,
  (SELECT id FROM categories WHERE slug = 'country-chicken-eggs-free-range' LIMIT 1),
  TRUE,
  TRUE,
  '/assets/images/product/2.png'
WHERE EXISTS (SELECT 1 FROM categories WHERE slug = 'country-chicken-eggs-free-range');

-- 4. Country chicken eggs (free range) (12 nos) (23/piece): ₹276
INSERT INTO products (name, slug, sku, description, short_description, price, stock_quantity, category_id, is_active, is_featured, image_url)
SELECT
  'Country chicken eggs (free range) (12 nos)',
  'country-chicken-eggs-free-range-12-nos',
  'EGG-CC-FR-12',
  'Fresh country chicken eggs, free range. 12 nos, ₹23/piece.',
  '23/piece',
  276.00,
  100,
  (SELECT id FROM categories WHERE slug = 'country-chicken-eggs-free-range' LIMIT 1),
  TRUE,
  TRUE,
  '/assets/images/product/2.png'
WHERE EXISTS (SELECT 1 FROM categories WHERE slug = 'country-chicken-eggs-free-range');

-- 5. Quail eggs: 12 nos (5/piece): ₹60
-- Category: quail-eggs
INSERT INTO products (name, slug, sku, description, short_description, price, stock_quantity, category_id, is_active, is_featured, image_url)
SELECT
  'Quail eggs (12 nos)',
  'quail-eggs-12-nos',
  'EGG-QL-12',
  'Fresh quail eggs. 12 nos, ₹5/piece.',
  '5/piece',
  60.00,
  100,
  (SELECT id FROM categories WHERE slug = 'quail-eggs' LIMIT 1),
  TRUE,
  TRUE,
  '/assets/images/product/2.png'
WHERE EXISTS (SELECT 1 FROM categories WHERE slug = 'quail-eggs');

-- 6. Quail eggs: 24 nos (4.75/piece): ₹114
INSERT INTO products (name, slug, sku, description, short_description, price, stock_quantity, category_id, is_active, is_featured, image_url)
SELECT
  'Quail eggs (24 nos)',
  'quail-eggs-24-nos',
  'EGG-QL-24',
  'Fresh quail eggs. 24 nos, ₹4.75/piece.',
  '4.75/piece',
  114.00,
  100,
  (SELECT id FROM categories WHERE slug = 'quail-eggs' LIMIT 1),
  TRUE,
  FALSE,
  '/assets/images/product/2.png'
WHERE EXISTS (SELECT 1 FROM categories WHERE slug = 'quail-eggs');

-- 7. Kadaknath chicken eggs (cage free) (6 nos) (22/piece): ₹132
-- Category: kadaknath-chicken-eggs
INSERT INTO products (name, slug, sku, description, short_description, price, stock_quantity, category_id, is_active, is_featured, image_url)
SELECT
  'Kadaknath chicken eggs (cage free) (6 nos)',
  'kadaknath-chicken-eggs-cage-free-6-nos',
  'EGG-KD-CF-6',
  'Premium Kadaknath chicken eggs, cage free. 6 nos, ₹22/piece.',
  '22/piece',
  132.00,
  100,
  (SELECT id FROM categories WHERE slug = 'kadaknath-chicken-eggs' LIMIT 1),
  TRUE,
  TRUE,
  '/assets/images/product/4.png'
WHERE EXISTS (SELECT 1 FROM categories WHERE slug = 'kadaknath-chicken-eggs');

-- 8. Kadaknath chicken eggs (cage free) (12 nos) (21/piece): ₹252
INSERT INTO products (name, slug, sku, description, short_description, price, stock_quantity, category_id, is_active, is_featured, image_url)
SELECT
  'Kadaknath chicken eggs (cage free) (12 nos)',
  'kadaknath-chicken-eggs-cage-free-12-nos',
  'EGG-KD-CF-12',
  'Premium Kadaknath chicken eggs, cage free. 12 nos, ₹21/piece.',
  '21/piece',
  252.00,
  100,
  (SELECT id FROM categories WHERE slug = 'kadaknath-chicken-eggs' LIMIT 1),
  TRUE,
  TRUE,
  '/assets/images/product/4.png'
WHERE EXISTS (SELECT 1 FROM categories WHERE slug = 'kadaknath-chicken-eggs');

-- Verify:
-- SELECT p.id, p.name, p.price, c.name AS category_name, c.slug AS category_slug
-- FROM products p
-- LEFT JOIN categories c ON p.category_id = c.id
-- ORDER BY c.sort_order, c.name, p.name;
