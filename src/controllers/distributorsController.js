const fs = require('fs');
const path = require('path');
const db = require('../database/models');

module.exports = {
    register: function(req, res) {
        res.render('distributor');
    },
    new: function(req, res) {
        db.Distributors.create({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
            repassword: req.body.repassword,
            address: req.body.address,
            phone: req.body.phone
        });

        res.redirect('/distributors/list');
    },
    list: function(req, res) {
        db.Distributors.findAll()
            .then(function(distributors) {
                res.render('distributorsList', {distributors:distributors});
            })
    },
    profile: function(req, res) {
        db.Distributors.findByPk(req.params.id)
            .then(function(distributor) {
                res.render('distributorProfile', {distributor:distributor});
            })
    },
    edit: function(req, res) {
        db.Distributors.findByPk(req.params.id)
            .then(function(distributor) {
                res.render('distributorProfileEdit', {distributor:distributor});
            })
    },
    updated: function(req, res) {
        db.Distributors.update({
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

        res.redirect('/distributors/profile/' + req.params.id);
    },
    delete: function(req, res) {
        db.Distributors.destroy({
            where: {
                id: req.params.id
            }
        });
        res.redirect('/distributors/list');
    }
}