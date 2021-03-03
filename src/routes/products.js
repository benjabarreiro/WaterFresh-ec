const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController.js');

const authMiddleware = require('../middlewares/authMiddleware');

// LIST
router.get('/', productsController.list);

router.post('/', productsController.addProductsCart);

// DETAIL
router.get('/products/detail/:id', productsController.detail);

module.exports = router;