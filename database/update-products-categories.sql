-- Update Products to match new categories
-- This script will map old categories to new ones and update product category_id references

-- Step 1: Get the new category IDs (for reference)
-- Country Chicken Eggs: id will be assigned
-- Country Chicken Eggs (Free Range): id will be assigned  
-- Quail Eggs: id will be assigned
-- Kadaknath Chicken Eggs: id will be assigned

-- Step 2: Update products based on category slug mapping
-- Map old categories to new ones:
-- 'fresh-eggs' -> 'country-chicken-eggs'
-- 'country-eggs' -> 'country-chicken-eggs'
-- 'free-range-eggs' -> 'country-chicken-eggs-free-range'
-- 'organic-eggs' -> 'country-chicken-eggs-free-range' (organic can be free range)
-- 'quail-eggs' -> 'quail-eggs' (same)
-- 'kadaknath-chicken-eggs' -> 'kadaknath-chicken-eggs' (if exists)
-- Others -> assign to 'country-chicken-eggs' as default

UPDATE products p
INNER JOIN categories c ON p.category_id = c.id
SET p.category_id = (
  CASE 
    WHEN c.slug IN ('fresh-eggs', 'country-eggs') THEN 
      (SELECT id FROM categories WHERE slug = 'country-chicken-eggs' LIMIT 1)
    WHEN c.slug IN ('free-range-eggs', 'organic-eggs') THEN 
      (SELECT id FROM categories WHERE slug = 'country-chicken-eggs-free-range' LIMIT 1)
    WHEN c.slug = 'quail-eggs' THEN 
      (SELECT id FROM categories WHERE slug = 'quail-eggs' LIMIT 1)
    WHEN c.slug = 'kadaknath-chicken-eggs' THEN 
      (SELECT id FROM categories WHERE slug = 'kadaknath-chicken-eggs' LIMIT 1)
    ELSE 
      (SELECT id FROM categories WHERE slug = 'country-chicken-eggs' LIMIT 1)
  END
)
WHERE c.slug NOT IN ('country-chicken-eggs', 'country-chicken-eggs-free-range', 'quail-eggs', 'kadaknath-chicken-eggs');

-- Alternative approach: If you want to update all products to specific categories
-- First, delete products with old categories (if you want a fresh start)
-- DELETE FROM products WHERE category_id IN (SELECT id FROM categories WHERE slug NOT IN ('country-chicken-eggs', 'country-chicken-eggs-free-range', 'quail-eggs', 'kadaknath-chicken-eggs'));

-- Or update category_id directly using category slugs from products table (if you have category_slug in products)
-- UPDATE products 
-- SET category_id = (
--   CASE 
--     WHEN category_slug IN ('fresh-eggs', 'country-eggs') THEN 
--       (SELECT id FROM categories WHERE slug = 'country-chicken-eggs' LIMIT 1)
--     WHEN category_slug IN ('free-range-eggs', 'organic-eggs') THEN 
--       (SELECT id FROM categories WHERE slug = 'country-chicken-eggs-free-range' LIMIT 1)
--     WHEN category_slug = 'quail-eggs' THEN 
--       (SELECT id FROM categories WHERE slug = 'quail-eggs' LIMIT 1)
--     WHEN category_slug = 'kadaknath-chicken-eggs' THEN 
--       (SELECT id FROM categories WHERE slug = 'kadaknath-chicken-eggs' LIMIT 1)
--     ELSE 
--       (SELECT id FROM categories WHERE slug = 'country-chicken-eggs' LIMIT 1)
--   END
-- );

-- Verify the update
-- SELECT p.id, p.name, c.name as category_name, c.slug as category_slug 
-- FROM products p 
-- LEFT JOIN categories c ON p.category_id = c.id;

