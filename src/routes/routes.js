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

router.get('/products', function(req, res){
    res.render('products.ejs');
});

//signIn logIn

router.get('/logIn', function(req, res){
    res.render('logIn.ejs');
});

router.get('/signIn', function(req, res){
    res.render('signIn.ejs');
});

//parallax effect test

router.get('/parallax-effect', function(req, res){
    res.render('parallax-effect.ejs');
})

module.exports = router;