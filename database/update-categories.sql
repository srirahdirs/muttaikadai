-- Update Categories to only the 4 required ones
-- First, delete all existing categories (be careful if you have products linked)
-- DELETE FROM products WHERE category_id IN (SELECT id FROM categories WHERE slug NOT IN ('country-chicken-eggs', 'country-chicken-eggs-free-range', 'quail-eggs', 'kadaknath-chicken-eggs'));
-- DELETE FROM categories WHERE slug NOT IN ('country-chicken-eggs', 'country-chicken-eggs-free-range', 'quail-eggs', 'kadaknath-chicken-eggs');

-- Truncate and insert fresh categories
TRUNCATE TABLE categories;

INSERT INTO categories (name, slug, image_url, description, quantity, is_active, created_at, updated_at) VALUES
('Country Chicken Eggs', 'country-chicken-eggs', '/assets/images/category/1.png', 'Country chicken eggs', 0, TRUE, NOW(), NOW()),
('Country Chicken Eggs (Free Range)', 'country-chicken-eggs-free-range', '/assets/images/category/2.png', 'Country chicken eggs (free range eggs)', 0, TRUE, NOW(), NOW()),
('Quail Eggs', 'quail-eggs', '/assets/images/category/7.png', 'Quail eggs', 0, TRUE, NOW(), NOW()),
('Kadaknath Chicken Eggs', 'kadaknath-chicken-eggs', '/assets/images/category/4.png', 'Kadaknath chicken eggs', 0, TRUE, NOW(), NOW());

