const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const routes = require('./routes');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use('/', routes);

// Error handler
app.use((err, req, res, next) => {
  res.json(err);
});

module.exports = app;
