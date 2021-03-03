const fs = require('fs');
const path = require('path');
const db = require('../database/models');

module.exports = {
    register: function(req, res) {
        res.render('distributor');
    },
    new: function(req, res) {
        db.Distributors.create({
            company_name: req.body.company_name,
            email: req.body.email,
            phone: req.body.phone,
            appointment: req.body.appointment
        });

        res.redirect('/');
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
            company_name: req.body.company_name,
            email: req.body.email,
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