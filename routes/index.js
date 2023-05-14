const express = require('express');
const router = express.Router();

router.use('/', require('./swagger')); // use swagger routes located at \routes\swagger.js
router.use('/contacts', require('./contacts'));

module.exports = router;
