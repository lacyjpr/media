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

// Handle client routes
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

module.exports = app;
