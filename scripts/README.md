# Data Import Script

This script imports sample egg product data into your MySQL database.

## Prerequisites

1. MySQL must be running in XAMPP
2. Database must be created (run `database/schema.sql` first)
3. `.env.local` file must exist with database credentials

## Usage

Run the import script:

```bash
npm run import-data
```

Or directly:

```bash
node scripts/import-data.cjs
```

## What it imports

- **8 Categories**: Fresh Eggs, Organic Eggs, Free Range Eggs, etc.
- **10 Sample Products**: Various egg products with prices, descriptions, and images

## Sample Data

The script imports:
- Categories optimized for egg selling platform
- Products with realistic pricing and descriptions
- Product images (uses existing image paths)
- Stock quantities and ratings

## After Import

Once imported, you can:
1. Test API endpoints:
   - http://localhost:3000/api/categories
   - http://localhost:3000/api/products

2. View data in phpMyAdmin:
   - Go to: http://localhost/phpmyadmin
   - Select database: `muttaikadai_db`
   - Browse `categories` and `products` tables

## Notes

- The script uses `ON DUPLICATE KEY UPDATE` so it's safe to run multiple times
- It won't duplicate data if you run it again
- You can modify the products array in the script to add more products



