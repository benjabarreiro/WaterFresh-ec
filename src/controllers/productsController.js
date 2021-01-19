const fs = require('fs');
const path = require('path');
const db = require('../database/models');

module.exports = {
    create: function(req, res) {
        res.render('createProduct');
    },
    saved: function(req, res) {
        db.Products.create({
            title: req.body.title,
            price: req.body.price,
            stock: req.body.stock
        });

        res.redirect('/');
    },
    list: function(req, res) {
        db.Products.findAll()
            .then(
                function(products) {
                    res.render("index.ejs", {
                        products:products
                    })
                })
    },
    detail: function(req, res) {
        db.Products.findByPk(req.params.id)
            .then(function(product) {
                res.render('productDetail', {product:product});
            })
    },
    edit: function(req, res) {
       db.Products.findByPk(req.params.id)
        .then(function(product) {
            res.render('productDetailEdit', {product:product});
        }) 
    },
    updated: function(req, res) {
        db.Products.update({
            title: req.body.title,
            price: req.body.price,
            stock: req.body.stock
        },
        {
            where: {
                id: req.params.id
            }
        });

        res.redirect('/products/detail/' + req.params.id);
    },
    delete: function(req, res) {
        db.Products.destroy({
            where: {
                id: req.params.id
            }
        });

        res.redirect('/')
    }
}