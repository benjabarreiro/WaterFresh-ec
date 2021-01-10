const fs = require('fs');
const path = require('path');
const db = require('../database/models');

module.exports = {
    signUpPage: function(req, res) {
        res.render('signUp');
    },
    newUser: function(req, res) {
        db.Users.create({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
            repassword: req.body.repassword,
            address: req.body.address,
            phone: req.body.phone
        });

        res.redirect('/');
    },
    list: function(req, res) {
        db.Users.findAll()
            .then(function(users) {
                res.render('userList', {users:users});
            })
    },
    profile: function(req, res) {
        db.Users.findByPk(req.params.id)
            .then(function(user) {
                res.render("userProfile", {user:user});
            })
    },
    edit: function(req, res) {
        db.Users.findByPk(req.params.id)
            .then(function(user) {
                res.render("userProfileEdit", {user:user});
            })
    },
    updated: function(req, res) {
        db.Users.update({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
            repassword: req.body.repassword,
            address: req.body.address,
            phone: req.body.phone
        },
        {
            where: {
                id: req.params.id
            }
        });

        res.redirect('/users/profile/' + req.params.id);
    },
    delete: function(req, res) {
        db.Users.destroy({
            where: {
                id: req.params.id
            }
        })

        res.redirect('/users/list');
    }
}