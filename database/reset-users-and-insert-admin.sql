-- Clear users table and insert a single admin user
--
-- Admin credentials after running this script:
--   Email:    admin@muttaikadai.com
--   Password: admin123
--
-- If you have rows in orders or other tables with user_id referencing users,
-- you may need to set those user_id to NULL first, or this DELETE will fail
-- (depending on your FK rules). This script does not modify orders.

USE muttaikadai_db;

-- Clear all users
DELETE FROM users;

-- Insert admin (password: admin123, bcrypt hash)
INSERT INTO users (name, email, password, role, is_active) VALUES
(
  'Super Admin',
  'admin@muttaikadai.com',
  '$2b$10$OVanD.oL5qEYjiknpwQH/.7HN2THa0Zzf7F3gIVWbU70rn2HFHYNy',
  'admin',
  TRUE
);

-- Verify: SELECT id, name, email, role, is_active FROM users;
