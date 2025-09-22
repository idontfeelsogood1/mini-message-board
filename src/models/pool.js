const { Pool } = require('pg')
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../connection.env') });

console.log(process.env.HOST)

module.exports = new Pool({
  host: process.env.HOST,
  user: process.env.USER,
  database: process.env.DB,
  password: process.env.PASSWORD,
  port: process.env.PORT
})