const fs = require('fs');
const path = require('path');
const db = require('../database/models');

module.exports = {
    list: function(req, res) {
        let Products = db.Products.findAll();

        let Users = db.Users.findByPk(req.params.id, {
            include: [
                {
                    association: 'products_shopping_cart'
                }
            ]
        });

        Promise.all([Products, Users])
            .then(function(result) {
                res.render('index.ejs', {
                    products: result[0],
                    users: result[1]
                });
            })
            .catch(function (error) {
                if(error == true) {
                    res.redirect('/users/logIn');
                }
            });
    },
    addProductsCart: function(req, res) {
        db.Products_Users.create({
            id_product: req.body.product,
            id_user: req.params.id
        });
    },
    detail: function(req, res) {
        db.Products.findByPk(req.params.id)
            .then(function(product) {
                res.render('productDetail', {product:product});
            })
    }
}