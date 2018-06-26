const express = require('express');
const app = express();
const pool = require('./db');

app.get('/users', (request, response) => {
  pool.query('SELECT * FROM users ORDER BY id ASC', (err, res) => {
    if (err) return next(err);
    response.json(res.rows);
  });
});

// Error handler
app.use((err, req, res, next) => {
  res.json(err);
});

module.exports = app;
