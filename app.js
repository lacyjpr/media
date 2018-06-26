const express = require('express');
const app = express();
require('dotenv').config();
const bodyParser = require('body-parser');
const routes = require('./routes');

// Middleware
app.use(bodyParser.json());
app.use('/', routes);

// Error handler
app.use((err, req, res, next) => {
  res.json(err);
});

module.exports = app;
