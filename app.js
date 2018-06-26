const express = require('express');
const app = express();
const users = require('./routes/users');

// Routes
app.use('/users', users);

// Error handler
app.use((err, req, res, next) => {
  res.json(err);
});

module.exports = app;
