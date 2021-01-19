const express = require('express');
const router = express.Router();
const distributorsController = require('../controllers/distributorsController.js');

// CREATE
router.get('/', distributorsController.register);

router.post('/', distributorsController.new);

// LIST
router.get('/list', distributorsController.list);

// PROFILE
router.get('/profile/:id', distributorsController.profile);

// UPDATE
router.get('/profile/edit/:id', distributorsController.edit);

router.put('/profile/edit/:id', distributorsController.updated);

// DELETE
router.delete('/profile/delete/:id', distributorsController.delete);

module.exports = router;