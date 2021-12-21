const dotenv = require('dotenv');
const path = require('path');

dotenv.config({
    path: path.join(__dirname, '../../.env'),
});

module.exports = {
    PORT: process.env.PORT,
    NODE_ENV: process.env.NODE_ENV,

    DB_URI: process.env.DB_URI,

    DB_USER: process.env.DB_USER,
    DB_PASS: process.env.DB_PASS,
    DB_HOST: process.env.DB_HOST,
    DB_PORT: process.env.DB_PORT,
    DB_DB: process.env.DB_DB,
};
