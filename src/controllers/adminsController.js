const db = require('../database/models');

module.exports = {
    admin: function(req, res) {

        let products = db.Products.findAll();
        let users = db.Users.findAll();
        let distributors = db.Distributors.findAll();

        Promise.all([products, users, distributors])
            .then(function(result) {

                    res.render('admin.ejs', {
                        products: result[0],
                        users: result[1],
                        distributors: result[2]
                    });
            })
            .catch(function(error) {
                if(error == true) {
                    res.redirect('/');
                }
            });
    },
    distributorsList: function(req, res) {
        db.Distributors.findAll()
            .then(function(distributors) {
                res.render('distributorsList.ejs', {distributors:distributors});
            })
    },
    distributorsExtract: function(req, res) {
        db.Distributors.findAll()
            .then(function(distributors) {
                res.render('distributorsExtractData.ejs', {distributors: distributors});
            })
    },
    usersList: function(req, res) {
        db.Users.findAll()
            .then(function(users) {
                res.render('userList.ejs', {users:users});
            })
    },
    usersExtract: function(req, res) {
        db.Users.findAll()
            .then(function(users) {
                res.render('usersExtractData.ejs', {users: users});
            })
    },
    newAdmin: function(req, res) {
        db.Users.findByPk(req.params.id)
            .then(function(newAdmin) {
                res.render('newAdmin.ejs', {newAdmin:newAdmin});
            })
    },
    saveNewAdmin: function(req, res) {
        db.Users.update({
            admin: req.body.admin
        },
        {
            where: {
                id: req.params.id
            }
        });

        res.redirect('/admins/usersList');
    },
    create: function(req, res) {
        res.render('createProduct.ejs');
    },
    saved: function(req, res, next) {
        db.Products.create({
            title: req.body.title,
            price: req.body.price,
            stock: req.body.stock,
            img_url: req.files[0].filename,
            img_slider: req.files[0].filename
        });

        res.redirect('/admins/list');
    },
    edit: function(req, res) {
        db.Products.findByPk(req.params.id)
         .then(function(product) {
             res.render('productEdit.ejs', {product:product});
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
    
         res.redirect('/admins/list');
     },
     delete: function(req, res) {
         db.Products.destroy({
             where: {
                 id: req.params.id
             }
         });
    
         res.redirect('/admins');
     }
}