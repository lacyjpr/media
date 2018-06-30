const { Router } = require('express');
const router = Router();
const pool = require('../db');

module.exports = app => {
  app.get('/users', (request, response, next) => {
    pool.query('SELECT * FROM users ORDER BY id ASC', (err, res) => {
      if (err) return next(err);
      response.json(res.rows);
    });
  });

  app.get('/users/:id', (request, response, next) => {
    const { id } = request.params;
    pool.query('SELECT * FROM users WHERE id = $1', [id], (err, res) => {
      if (err) return next(err);
      response.json(res.rows);
    });
  });
};

//module.exports = router;
