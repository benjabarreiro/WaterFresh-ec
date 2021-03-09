const db = require('../database/models');

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
        db.LandingPage.create({
            email: req.body.email,
            name: req.body.name,
            phone: req.body.phone
        });

        res.redirect('/');
    }
}