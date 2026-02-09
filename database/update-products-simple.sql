-- Simple Query to Update Products Categories
-- Run this AFTER you've updated/inserted the new categories

-- Option 1: Update products by mapping old category slugs to new ones
UPDATE products p
INNER JOIN categories old_cat ON p.category_id = old_cat.id
SET p.category_id = (
  CASE 
    -- Map to Country Chicken Eggs
    WHEN old_cat.slug IN ('fresh-eggs', 'country-eggs') THEN 
      (SELECT id FROM categories WHERE slug = 'country-chicken-eggs' LIMIT 1)
    
    -- Map to Country Chicken Eggs (Free Range)
    WHEN old_cat.slug IN ('free-range-eggs', 'organic-eggs') THEN 
      (SELECT id FROM categories WHERE slug = 'country-chicken-eggs-free-range' LIMIT 1)
    
    -- Keep Quail Eggs as is
    WHEN old_cat.slug = 'quail-eggs' THEN 
      (SELECT id FROM categories WHERE slug = 'quail-eggs' LIMIT 1)
    
    -- Keep Kadaknath as is (if it exists)
    WHEN old_cat.slug = 'kadaknath-chicken-eggs' THEN 
      (SELECT id FROM categories WHERE slug = 'kadaknath-chicken-eggs' LIMIT 1)
    
    -- Default to Country Chicken Eggs for any other categories
    ELSE 
      (SELECT id FROM categories WHERE slug = 'country-chicken-eggs' LIMIT 1)
  END
)
WHERE old_cat.slug NOT IN ('country-chicken-eggs', 'country-chicken-eggs-free-range', 'quail-eggs', 'kadaknath-chicken-eggs');

-- After running the update, verify with:
-- SELECT p.id, p.name, c.name as category_name, c.slug as category_slug 
-- FROM products p 
-- LEFT JOIN categories c ON p.category_id = c.id
-- ORDER BY c.name;

