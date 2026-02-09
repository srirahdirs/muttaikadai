# API Reference Guide

## Base URL
All API endpoints are available at: `http://localhost:3000/api`

## Categories API

### Get All Categories
```
GET /api/categories
```

**Query Parameters:**
- `parent_id` (optional) - Filter by parent category ID
- `is_active` (optional) - Filter by active status (default: true)

**Example:**
```javascript
const response = await fetch('/api/categories');
const data = await response.json();
```

### Get Single Category
```
GET /api/categories/[id]
GET /api/categories/[slug]
```

**Example:**
```javascript
// By ID
const response = await fetch('/api/categories/1');

// By slug
const response = await fetch('/api/categories/fresh-eggs');
```

### Create Category
```
POST /api/categories
```

**Request Body:**
```json
{
  "name": "Fresh Eggs",
  "slug": "fresh-eggs",
  "image_url": "/assets/images/category/1.png",
  "description": "Fresh farm eggs",
  "parent_id": null,
  "sort_order": 0
}
```

### Update Category
```
PUT /api/categories/[id]
```

### Delete Category
```
DELETE /api/categories/[id]
```

---

## Products API

### Get All Products
```
GET /api/products
```

**Query Parameters:**
- `category_id` (optional) - Filter by category
- `featured` (optional) - Filter featured products (true/false)
- `is_active` (optional) - Filter by active status (default: true)
- `search` (optional) - Search in name, description, SKU
- `min_price` (optional) - Minimum price filter
- `max_price` (optional) - Maximum price filter
- `page` (optional) - Page number (default: 1)
- `limit` (optional) - Items per page (default: 12)
- `sort` (optional) - Sort order: `price_asc`, `price_desc`, `name`, `created_at`, `rating` (default: `created_at`)

**Example:**
```javascript
// Get featured products
const response = await fetch('/api/products?featured=true&page=1&limit=12');

// Search products
const response = await fetch('/api/products?search=egg&category_id=1');

// Get products by category with pagination
const response = await fetch('/api/products?category_id=1&page=1&limit=12&sort=price_asc');
const data = await response.json();
// data.data contains products array
// data.pagination contains pagination info
```

### Get Single Product
```
GET /api/products/[id]
GET /api/products/[slug]
```

**Example:**
```javascript
// By ID
const response = await fetch('/api/products/1');

// By slug
const response = await fetch('/api/products/fresh-eggs-dozen');
```

### Create Product
```
POST /api/products
```

**Request Body:**
```json
{
  "name": "Fresh Eggs - Dozen",
  "slug": "fresh-eggs-dozen",
  "sku": "EGG-001",
  "description": "Fresh farm eggs, 12 pieces",
  "short_description": "Fresh eggs",
  "price": 10.00,
  "sale_price": 8.50,
  "stock_quantity": 100,
  "stock_status": "in_stock",
  "image_url": "/assets/images/product/1.png",
  "gallery_images": ["/assets/images/product/1-1.png", "/assets/images/product/1-2.png"],
  "category_id": 1,
  "weight": 0.7,
  "unit": "dozen",
  "is_featured": true
}
```

### Update Product
```
PUT /api/products/[id]
```

**Request Body:** (All fields optional, only include fields to update)
```json
{
  "price": 12.00,
  "stock_quantity": 150,
  "is_featured": false
}
```

### Delete Product
```
DELETE /api/products/[id]
```

---

## Frontend Usage Examples

### Using in React Components

```javascript
// Fetch categories
async function getCategories() {
  const res = await fetch('/api/categories');
  const data = await res.json();
  if (data.success) {
    return data.data;
  }
  return [];
}

// Fetch products with filters
async function getProducts(categoryId, page = 1) {
  const params = new URLSearchParams({
    category_id: categoryId,
    page: page.toString(),
    limit: '12',
    sort: 'price_asc'
  });
  
  const res = await fetch(`/api/products?${params}`);
  const data = await res.json();
  if (data.success) {
    return {
      products: data.data,
      pagination: data.pagination
    };
  }
  return { products: [], pagination: null };
}

// In a React component
'use client';
import { useEffect, useState } from 'react';

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    async function loadProducts() {
      const { products: data } = await getProducts(1);
      setProducts(data);
    }
    loadProducts();
  }, []);
  
  return (
    <div>
      {products.map(product => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>${product.sale_price || product.price}</p>
        </div>
      ))}
    </div>
  );
}
```

### Server-Side Fetching (Next.js App Router)

```javascript
// app/products/page.js
async function getProducts() {
  const res = await fetch('http://localhost:3000/api/products', {
    cache: 'no-store' // or 'force-cache' for static generation
  });
  const data = await res.json();
  return data.success ? data.data : [];
}

export default async function ProductsPage() {
  const products = await getProducts();
  
  return (
    <div>
      {products.map(product => (
        <div key={product.id}>
          <h2>{product.name}</h2>
        </div>
      ))}
    </div>
  );
}
```

---

## Response Format

All API responses follow this format:

**Success:**
```json
{
  "success": true,
  "data": { ... }
}
```

**Error:**
```json
{
  "success": false,
  "error": "Error message"
}
```

**With Pagination:**
```json
{
  "success": true,
  "data": [...],
  "pagination": {
    "page": 1,
    "limit": 12,
    "total": 100,
    "totalPages": 9
  }
}
```


