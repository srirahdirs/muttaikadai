/**
 * Create Admin User Script
 * Creates a default admin user for the admin panel
 * 
 * Usage: node scripts/create-admin.cjs
 */

require('dotenv').config({ path: '.env.local' });
const mysql = require('mysql2/promise');
const bcrypt = require('bcryptjs');

const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '2DC1m2cI(0Olof]H',
  database: process.env.DB_NAME || 'muttaikadai_db',
  port: parseInt(process.env.DB_PORT || '3307'),
});

async function createAdmin() {
  console.log('Creating admin user...\n');

  const email = 'admin@muttaikadai.com';
  const password = 'admin123'; // Change this in production!
  const name = 'Super Admin';

  try {
    // Check if admin already exists
    const [existing] = await pool.execute(
      'SELECT * FROM users WHERE email = ? AND role = ?',
      [email, 'admin']
    );

    if (existing.length > 0) {
      console.log('⚠️  Admin user already exists!');
      console.log(`   Email: ${email}`);
      console.log('   To reset password, delete the user from database first.\n');
      return;
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create admin user
    await pool.execute(
      `INSERT INTO users (name, email, password, role, is_active) 
       VALUES (?, ?, ?, ?, ?)`,
      [name, email, hashedPassword, 'admin', true]
    );

    console.log('✅ Admin user created successfully!\n');
    console.log('Login credentials:');
    console.log(`   Email: ${email}`);
    console.log(`   Password: ${password}\n`);
    console.log('⚠️  IMPORTANT: Change the password after first login!\n');

  } catch (error) {
    console.error('❌ Error creating admin:', error.message);
    if (error.code === 'ER_BAD_DB_ERROR') {
      console.error('   Make sure the database exists! Run schema.sql first.');
    }
    process.exit(1);
  } finally {
    await pool.end();
  }
}

createAdmin();

