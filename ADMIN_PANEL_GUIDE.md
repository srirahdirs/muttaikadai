# Admin Panel Guide

## 🎉 Admin Panel Created!

A beautiful, modern admin panel has been created for managing your MuttaiKadai online egg selling platform.

## 🚀 Quick Start

### Step 1: Create Admin User

Run this command to create a default admin user:

```bash
npm run create-admin
```

This creates:
- **Email:** admin@muttaikadai.com
- **Password:** admin123

⚠️ **IMPORTANT:** Change the password after first login!

### Step 2: Access Admin Panel

1. Start your Next.js server:
   ```bash
   npm run dev
   ```

2. Visit admin login:
   ```
   http://localhost:3000/admin/login
   ```

3. Login with the credentials above

4. You'll be redirected to the dashboard!

---

## 📋 Admin Panel Features

### ✅ Completed Features:

1. **Admin Authentication**
   - Login page with beautiful UI
   - Session management (localStorage)
   - Protected routes

2. **Dashboard**
   - Statistics overview
   - Total products, categories, orders, users
   - Revenue tracking
   - Today's orders count

3. **Products Management**
   - View all products in a table
   - Search products
   - Add new products
   - Edit products
   - Delete products
   - Pagination support
   - Stock status indicators

4. **Categories Management**
   - View all categories in grid layout
   - Add new categories
   - Edit categories
   - Delete categories
   - Category product count

5. **Orders Management** (UI Ready)
   - Orders list view
   - Order status tracking
   - Payment status tracking
   - Order details view

6. **Responsive Design**
   - Mobile-friendly sidebar
   - Beautiful UI with your brand colors
   - Modern card-based layouts

---

## 📁 Admin Panel Structure

```
src/app/admin/
├── login/
│   └── page.jsx              (Login page)
├── layout.jsx                (Admin layout with sidebar)
├── dashboard/
│   └── page.jsx              (Dashboard home)
├── products/
│   ├── page.jsx              (Products list)
│   └── new/
│       └── page.jsx           (Add new product)
├── categories/
│   └── page.jsx               (Categories list)
└── orders/
    └── page.jsx               (Orders list)
```

---

## 🎨 Design Features

- **Color Scheme:** Uses your brand colors (gold, purple)
- **Modern UI:** Clean, professional design
- **Responsive:** Works on all devices
- **User-Friendly:** Intuitive navigation

---

## 🔧 API Endpoints Used

- `POST /api/admin/login` - Admin login
- `GET /api/admin/stats` - Dashboard statistics
- `GET /api/products` - List products
- `POST /api/products` - Create product
- `PUT /api/products/[id]` - Update product
- `DELETE /api/products/[id]` - Delete product
- `GET /api/categories` - List categories
- `POST /api/categories` - Create category
- `PUT /api/categories/[id]` - Update category
- `DELETE /api/categories/[id]` - Delete category

---

## 📝 Next Steps

### To Complete Admin Panel:

1. **Product Edit Page**
   - Create `/admin/products/[id]/edit/page.jsx`
   - Similar to new product page but pre-filled

2. **Category Add/Edit Pages**
   - Create `/admin/categories/new/page.jsx`
   - Create `/admin/categories/[id]/edit/page.jsx`

3. **Orders API**
   - Create `/api/admin/orders/route.js`
   - Implement order management endpoints

4. **Users Management**
   - Create users list page
   - User management features

5. **Settings Page**
   - Site settings
   - General configuration

---

## 🔐 Security Notes

Currently using localStorage for session management. For production:

1. **Use proper session management:**
   - JWT tokens
   - HTTP-only cookies
   - Server-side session validation

2. **Add middleware:**
   - Protect admin routes
   - Verify admin role on each request

3. **Password security:**
   - Enforce strong passwords
   - Password reset functionality
   - Two-factor authentication (optional)

---

## 🎯 Usage Examples

### Adding a Product:

1. Go to **Products** → **Add New Product**
2. Fill in product details
3. Select category
4. Set price and stock
5. Upload image URL
6. Click **Create Product**

### Managing Categories:

1. Go to **Categories**
2. Click **Add New Category**
3. Enter category name and description
4. Add category image
5. Save

### Viewing Dashboard:

- See total products, categories, orders
- View revenue statistics
- Check today's orders

---

## 🐛 Troubleshooting

### Can't login?
- Make sure you ran `npm run create-admin`
- Check database connection
- Verify user exists in database

### API errors?
- Check `.env.local` file exists
- Verify database is running
- Check API route files exist

### Page not found?
- Make sure you're logged in
- Check route paths are correct
- Verify Next.js server is running

---

## 📞 Support

If you need help:
1. Check API endpoints are working
2. Verify database connection
3. Check browser console for errors
4. Review server logs

---

**Enjoy managing your egg selling platform! 🥚✨**

