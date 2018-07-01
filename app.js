const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const pool = require('./db');
const routes = require('./routes');

const app = express();

// Middleware
app.use(bodyParser.json());
//app.use('/', routes);

app.get('/users', (request, response, next) => {
  pool.query('SELECT * FROM users ORDER BY id ASC', (err, res) => {
    if (err) return next(err);
    response.json(res.rows);
  });
});

app.get('/users:id', (request, response, next) => {
  const { id } = request.params;
  pool.query('SELECT * FROM users WHERE id = $1', [id], (err, res) => {
    if (err) return next(err);
    response.json(res.rows);
  });
});

// Error handler
app.use((err, req, res, next) => {
  res.json(err);
});

// Handle client routes
//if (process.env.NODE_ENV === 'production') {
app.use(express.static('client/build'));
const path = require('path');
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});
//}

module.exports = app;
