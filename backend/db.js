const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'military_assets',
  password: 'Kavya@2004',
  port: 5432,
});

module.exports = pool;