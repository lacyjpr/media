const { Router } = require('express');
const router = Router();

const users = require('./users');

router.use('/users', users);

module.exports = router;
