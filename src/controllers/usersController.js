const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');
const db = require('../database/models');

let {check, validationResult, body} = require('express-validator');

module.exports = {
    signUpPage: function(req, res) {
        res.render('signUp.ejs');
    },
    newUser: function(req, res) {
        let errors = validationResult(req);
        if(errors.isEmpty()) {
            db.Users.create({
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                username: req.body.username,
                email: req.body.email,
                password: bcrypt.hashSync(req.body.password, 10),
                repassword: bcrypt.hashSync(req.body.repassword, 10)
            })
            .then(function() {
                res.redirect('/users/login');
            })
        } else {
            res.render('signUp.ejs', {errors: errors.errors});
        }
    },
    logIn: function(req, res) {
        res.render('userLogin.ejs');
    },
    validationLogIn: function(req, res, next) {
        let errors = validationResult(req);

        if(errors.isEmpty()) {
            db.Users.findOne({
                where: {
                    email: req.body.email
                }
            })
            .then(function(result) {
                if(result.email == req.body.email && bcrypt.compareSync(req.body.password, result.password)) {
                    req.session.emailUser = result.email;
                    if(req.body.remember != undefined) {
                        res.cookie('authRemember', result.email,
                        {maxAge: 60000 * 10 * 5})
                    }
                    return res.redirect('/');
                }
                return res.render('userLogin.ejs', {
                    errors: [
                        {msg: 'Credenciales inválidas'}
                    ]
                })
            })
        } else {
            res.render('userLogin.ejs', {errors: errors.errors});
        }
    },
    logout: function(req, res) {
        req.session.destroy();
        res.cookie('authRemember', ''.email, {maxAge: -1});
        res.redirect('/');
    },
    profile: function(req, res) {
        db.Users.findByPk(req.params.id)
            .then(function(user) {
                res.render("userProfile.ejs", {user:user});
            })
    },
    edit: function(req, res) {
        db.Users.findByPk(req.params.id)
            .then(function(user) {
                res.render("userProfileEdit.ejs", {user:user});
            })
    },
    updated: function(req, res) {
        db.Users.update({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            username: req.body.username,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 10),
            repassword: bcrypt.hashSync(req.body.repassword, 10),
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