const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController.js');

const registerValidation = require('../validations/registerValidation');
const loginValidation = require('../validations/loginValidation');

const authMiddleware = require('../middlewares/authMiddleware');
const authMiddleware2 = require('../middlewares/authMiddleware2');


// CREATE
router.get('/registration', usersController.signUpPage);

router.post('/registration', registerValidation, usersController.newUser);

// LOG IN
router.get('/logIn', usersController.logIn);

router.post('/logIn', loginValidation, usersController.validationLogIn);

router.get('/logout', authMiddleware, usersController.logout);

// READ
router.get('/list', usersController.list);

// PROFILE
router.get('/profile/:id', authMiddleware, authMiddleware2, usersController.profile);

// UPDATE
router.get('/profile/edit/:id', usersController.edit);

router.put('/profile/edit/:id', usersController.updated);

// DELETE
router.delete('/profile/delete/:id', usersController.delete);

router.get('/shoppingCart', function(req, res) {
    res.render('shoppingCart');
});

router.get('/buyForm', function(req, res) {
    res.render('buyForm');
})

module.exports = router;