# Database Setup Guide

## Prerequisites
- XAMPP installed and running
- MySQL service running in XAMPP

## Step 1: Create Environment File

Create a `.env.local` file in the root directory with the following content:

```env
# Database Configuration
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=2DC1m2cI(0Olof]H
DB_NAME=muttaikadai_db
DB_PORT=3306

# API Configuration
NEXT_PUBLIC_API_URL=http://localhost:3000/api
```

**Note:** Update `DB_PASSWORD` if you have set a MySQL root password in XAMPP.

## Step 2: Create Database

1. Open phpMyAdmin: http://localhost/phpmyadmin
2. Go to SQL tab
3. Copy and run the SQL from `database/schema.sql` file
   - Or manually create database: `CREATE DATABASE muttaikadai_db;`
   - Then select the database and import/run the schema.sql file

## Step 3: Verify Database Connection

The database connection will be tested automatically when you start the Next.js server. Check the console for connection status.

## Step 4: Test API Endpoints

Once the server is running, you can test the API endpoints:

### Admin user (clear users and insert one admin)

To wipe the `users` table and create a single admin:

1. Run `database/reset-users-and-insert-admin.sql` in phpMyAdmin (or MySQL).

**Default admin:**

- **Email:** `admin@muttaikadai.com`
- **Password:** `admin123`

Log in at `/admin/login`. Change the password after first login.

### Categories
- GET all categories: `http://localhost:3000/api/categories`
- GET single category: `http://localhost:3000/api/categories/1` or `/api/categories/fresh-eggs`
- POST create category: Send POST request to `/api/categories`
- PUT update category: Send PUT request to `/api/categories/[id]`
- DELETE category: Send DELETE request to `/api/categories/[id]`

### Products
- GET all products: `http://localhost:3000/api/products`
- GET with filters: `/api/products?category_id=1&featured=true&page=1&limit=12`
- GET single product: `http://localhost:3000/api/products/1` or `/api/products/product-slug`
- POST create product: Send POST request to `/api/products`
- PUT update product: Send PUT request to `/api/products/[id]`
- DELETE product: Send DELETE request to `/api/products/[id]`

## Database Schema Overview

### Main Tables:
- **categories** - Product categories (Fresh Eggs, Organic Eggs, etc.)
- **products** - Product details (name, price, images, etc.)
- **product_attributes** - Product variations (size, type, etc.)
- **users** - Admin and customer accounts
- **orders** - Order information
- **order_items** - Items in each order
- **carts** - Shopping cart sessions
- **cart_items** - Items in cart
- **reviews** - Product reviews and ratings
- **blog_posts** - Blog posts (optional)

## Sample Data

The schema.sql file includes sample category data for egg products. You can add products manually via the API or directly in the database.

### Replace products with the new egg list

To remove existing products and insert the 8 new egg products (by category):

1. Ensure the 4 categories exist: `country-chicken-eggs`, `country-chicken-eggs-free-range`, `quail-eggs`, `kadaknath-chicken-eggs` (from `schema.sql` or `database/update-categories.sql`).
2. If you have `order_items` (products in orders), run: `DELETE FROM order_items;` first.
3. Run: `database/replace-products-new-list.sql` in phpMyAdmin or MySQL.

Products inserted:

| Product | Category | Price |
|---------|----------|-------|
| Country chicken eggs (cage free) (6 nos) | country-chicken-eggs | ₹96 |
| Country chicken eggs (cage free) (12 nos) | country-chicken-eggs | ₹180 |
| Country chicken eggs (free range) (6 nos) | country-chicken-eggs-free-range | ₹150 |
| Country chicken eggs (free range) (12 nos) | country-chicken-eggs-free-range | ₹276 |
| Quail eggs (12 nos) | quail-eggs | ₹60 |
| Quail eggs (24 nos) | quail-eggs | ₹114 |
| Kadaknath chicken eggs (cage free) (6 nos) | kadaknath-chicken-eggs | ₹132 |
| Kadaknath chicken eggs (cage free) (12 nos) | kadaknath-chicken-eggs | ₹252 |


