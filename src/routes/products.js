const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController.js');

router.get('/', productsController.main);

module.exports = router;