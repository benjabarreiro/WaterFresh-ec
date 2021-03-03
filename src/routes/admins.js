const express = require('express');
const router = express.Router();
const adminsController = require('../controllers/adminsController.js');

const uploadImageProductMiddleware = require('../middlewares/uploadImageProductMiddleware.js');

router.get('/list', adminsController.admin);

// DISTRIBUTOR'S LIST
router.get('/distributorsList', adminsController.distributorsList);

// USER'S LIST
router.get('/usersList', adminsController.usersList);

// CREATE ADMIN
router.get('/create/:id', adminsController.newAdmin);

router.put('/create/:id', adminsController.saveNewAdmin);

// CREATE PRODUCT
router.get('/product/create', adminsController.create);

router.post('/product/create', uploadImageProductMiddleware.any(), adminsController.saved);

// UPDATE PRODUCT
router.get('/product/edit/:id', adminsController.edit);

router.put('/product/edit/:id', adminsController.updated);

// DELETE PRODUCT
router.delete('/product/delete/:id', adminsController.delete);

module.exports = router;