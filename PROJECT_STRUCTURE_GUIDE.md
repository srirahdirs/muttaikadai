# Project Structure & Database Setup Guide

## 📁 Next.js Project Structure

### Root Directory (`C:\xampp\htdocs\muttaikadai_react\`)

```
muttaikadai_react/
├── .env.local                 ⚠️ CREATE THIS FILE (Database config)
├── package.json               (Dependencies & scripts)
├── next.config.mjs            (Next.js configuration)
├── tailwind.config.js         (Tailwind CSS config)
│
├── database/                  📊 DATABASE FILES
│   └── schema.sql             (MySQL database structure)
│
├── scripts/                   🔧 UTILITY SCRIPTS
│   ├── import-data.cjs        (Import sample data)
│   └── README.md
│
├── public/                    🖼️ STATIC FILES
│   └── assets/                (Images, fonts, etc.)
│
└── src/                       📝 SOURCE CODE
    ├── app/                   ⭐ NEXT.JS APP ROUTER (Main files)
    │   ├── layout.jsx         (Root layout)
    │   ├── page.jsx           (Home page)
    │   │
    │   ├── api/               🔌 API ROUTES (Backend endpoints)
    │   │   ├── categories/
    │   │   │   ├── route.js           (GET, POST /api/categories)
    │   │   │   └── [id]/route.js      (GET, PUT, DELETE single category)
    │   │   └── products/
    │   │       ├── route.js           (GET, POST /api/products)
    │   │       └── [id]/route.js      (GET, PUT, DELETE single product)
    │   │
    │   ├── home-2/            (Home page variant 2)
    │   ├── home-3/            (Home page variant 3)
    │   ├── shop-1/            (Shop page variant 1)
    │   ├── shop-2/            (Shop page variant 2)
    │   ├── blog-1/            (Blog pages)
    │   └── ...                (Other pages)
    │
    ├── components/            🧩 REACT COMPONENTS
    │   ├── Header.jsx
    │   ├── Footer.jsx
    │   ├── Hero.jsx
    │   └── ...                (All UI components)
    │
    ├── lib/                   ⚙️ UTILITIES & CONFIG
    │   ├── db.js              ⚠️ DATABASE CONNECTION (Already created)
    │   └── utils.js           (Helper functions)
    │
    ├── data/                  📦 HARDCODED DATA (Old - will replace with API)
    │   └── data.js            (Static data - will be replaced)
    │
    ├── hooks/                 (Custom React hooks)
    ├── fonts/                 (Font configurations)
    └── styles/                (CSS files)
```

---

## 🔧 Database Setup Locations

### 1. Database Configuration File

**Location:** `.env.local` (in project root)

**⚠️ YOU NEED TO CREATE THIS FILE!**

```env
# Create this file at: C:\xampp\htdocs\muttaikadai_react\.env.local

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=muttaikadai_db
DB_PORT=3307
NEXT_PUBLIC_API_URL=http://localhost:3000/api
```

**How to create:**
1. Open project root: `C:\xampp\htdocs\muttaikadai_react\`
2. Create new file: `.env.local`
3. Copy the content above
4. Save it

---

### 2. Database Connection File

**Location:** `src/lib/db.js` ✅ (Already created)

This file handles MySQL connection:
- Reads `.env.local` for credentials
- Creates connection pool
- Used by all API routes

**File path:** `C:\xampp\htdocs\muttaikadai_react\src\lib\db.js`

---

### 3. Database Schema File

**Location:** `database/schema.sql` ✅ (Already created)

Contains all table structures:
- Categories table
- Products table
- Users, Orders, etc.

**File path:** `C:\xampp\htdocs\muttaikadai_react\database\schema.sql`

**How to use:**
1. Open phpMyAdmin: http://localhost/phpmyadmin
2. Select database: `muttaikadai_db`
3. Click "SQL" tab
4. Copy contents of `schema.sql`
5. Paste and run

---

### 4. API Routes (Backend Endpoints)

**Location:** `src/app/api/` ✅ (Already created)

These are your backend API endpoints:

```
src/app/api/
├── categories/
│   ├── route.js          → GET /api/categories, POST /api/categories
│   └── [id]/route.js     → GET /api/categories/1, PUT, DELETE
│
└── products/
    ├── route.js          → GET /api/products, POST /api/products
    └── [id]/route.js     → GET /api/products/1, PUT, DELETE
```

**How they work:**
- Each `route.js` file exports functions: `GET`, `POST`, `PUT`, `DELETE`
- They connect to database using `src/lib/db.js`
- Return JSON responses

---

## 🎯 Setup Checklist

### ✅ Already Done:
- [x] Database schema created (`database/schema.sql`)
- [x] Database connection file (`src/lib/db.js`)
- [x] API routes created (`src/app/api/`)
- [x] Import script created (`scripts/import-data.cjs`)

### ⚠️ You Need To Do:

1. **Create `.env.local` file** (Project root)
   ```
   Location: C:\xampp\htdocs\muttaikadai_react\.env.local
   ```
   - Copy the config from above
   - Adjust `DB_PORT` (3306 or 3307)
   - Add password if MySQL has one

2. **Run database schema** (phpMyAdmin)
   ```
   File: database/schema.sql
   ```
   - Open phpMyAdmin
   - Select/create database: `muttaikadai_db`
   - Run the SQL from `schema.sql`

3. **Import sample data** (Optional)
   ```bash
   npm run import-data
   ```

4. **Test API**
   - Start server: `npm run dev`
   - Visit: http://localhost:3000/api/categories
   - Visit: http://localhost:3000/api/products

---

## 📍 Key File Locations Summary

| Purpose | File Location |
|---------|---------------|
| **Database Config** | `.env.local` (root) - **CREATE THIS** |
| **Database Connection** | `src/lib/db.js` ✅ |
| **Database Schema** | `database/schema.sql` ✅ |
| **API Routes** | `src/app/api/` ✅ |
| **Frontend Pages** | `src/app/page.jsx`, `src/app/shop-2/`, etc. |
| **Components** | `src/components/` |
| **Import Script** | `scripts/import-data.cjs` ✅ |

---

## 🚀 Quick Start

1. **Create `.env.local`** in project root
2. **Start MySQL** in XAMPP
3. **Run schema.sql** in phpMyAdmin
4. **Run import script**: `npm run import-data`
5. **Start Next.js**: `npm run dev`
6. **Test API**: http://localhost:3000/api/categories

---

## 💡 Next Steps

After database is set up:
- Update frontend components to use API instead of `data.js`
- Connect shop pages to product API
- Connect category pages to category API
- Add cart functionality
- Add user authentication

---

Need help with any specific part? Let me know!

