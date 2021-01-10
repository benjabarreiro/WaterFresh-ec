const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController.js');


// CREATE
router.get('/registration', usersController.signUpPage);

router.post('/registration', usersController.newUser);

// READ
router.get('/list', usersController.list);

// PROFILE
router.get('/profile/:id', usersController.profile);

// UPDATE
router.get('/profile/edit/:id', usersController.edit);

router.post('/profile/edit/:id', usersController.updated);

// DELETE
router.post('/profile/delete/:id', usersController.delete);


module.exports = router;