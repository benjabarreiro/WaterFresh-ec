const db = require('../database/models');
const fs = require('fs');
const path = require('path');

module.exports = {
    landingPage: function(req, res) {
        db.Products.findAll()
            .then(function(products) {
                res.render('landingPage.ejs', {
                    products: products
                });
            });
    },
    submit: function(req, res) {

        let landingPage = {
            email: req.body.email,
            name: req.body.name,
            phone: req.body.phone
        }

        let landingPageJSON = JSON.stringify(landingPage);

        fs.appendFileSync('landingPage.json', landingPageJSON);

        db.LandingPage.create({
            email: req.body.email,
            name: req.body.name,
            phone: req.body.phone
        });

        res.redirect('/');
    },
    data: function(req, res) {
        db.LandingPage.findAll()
            .then(function(data) {
                res.render('landingPageData', {data: data});
            });
    }
}