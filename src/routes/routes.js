const express = require('express');
const router = express.Router();

router.get('/aboutUs', function(req, res){
    res.render('aboutUs.ejs');
});

router.get('/contact', function(req, res){
    res.render('contact.ejs');
});

module.exports = router;