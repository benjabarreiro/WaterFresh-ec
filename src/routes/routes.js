const express = require('express');
const router = express.Router();

//main

router.get('/', function(req, res){
    res.render('index.ejs');
});

//pages

router.get('/aboutUs', function(req, res){
    res.render('aboutUs.ejs');
});

router.get('/contact', function(req, res){
    res.render('contact.ejs');
});

router.get('/distributor', function(req, res){
    res.render('distributor.ejs');
});

//signIn logIn

router.get('/logIn', function(req, res){
    res.render('logIn.ejs');
});

router.get('/signUp', function(req, res){
    res.render('signUp.ejs');
});

module.exports = router;