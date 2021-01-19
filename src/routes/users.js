const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController.js');

const registerValidation = require('../validations/registerValidation');
const loginValidation = require('../validations/loginValidation');


// CREATE
router.get('/registration', usersController.signUpPage);

router.post('/registration', registerValidation, usersController.newUser);

// LOG IN
router.get('/logIn', usersController.logIn);

router.post('/logIn', loginValidation, usersController.validationLogIn);

// READ
router.get('/list', usersController.list);

// PROFILE
router.get('/profile/:id', usersController.profile);

// UPDATE
router.get('/profile/edit/:id', usersController.edit);

router.put('/profile/edit/:id', usersController.updated);

// DELETE
router.delete('/profile/delete/:id', usersController.delete);

module.exports = router;