const { Pool } = require('pg');
const user = process.env.ELEPHANT_USER;
const host = process.env.ELEPHANT_HOST;
const database = process.env.ELEPHANT_DATABASE;
const password = process.env.ELEPHANT_PASSWORD;
const port = process.env.ELEPHANT_PORT;

const pool = new Pool({ user, host, database, password, port });

module.exports = pool;
