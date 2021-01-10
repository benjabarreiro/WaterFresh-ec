const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController.js');

// CREATE
router.get('/products/create', productsController.create);

router.post('/products/create', productsController.saved);

// LIST
router.get('/', productsController.list);

// DETAIL
router.get('/products/detail/:id', productsController.detail);

// UPDATE
router.get('/products/detail/edit/:id', productsController.edit);

router.post('/products/detail/edit/:id', productsController.updated);

// DELETE
router.post('/products/detail/delete/:id', productsController.delete);

module.exports = router;