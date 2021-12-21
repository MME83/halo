const { Pool } = require('pg');

const {
    DB_USER,
    DB_PASS,
    DB_HOST,
    DB_PORT,
    DB_DB,
} = require('../common/config');

const pool = new Pool({
    user: DB_USER,
    password: DB_PASS,
    host: DB_HOST,
    port: DB_PORT,
    database: DB_DB,
});

module.exports = pool;
