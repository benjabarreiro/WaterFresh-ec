const fs = require('fs');
const path = require('path');
const db = require('../database/models');

module.exports = {
    main: function(req, res) {
        db.Products.findAll()
            .then(
                function(products) {
                    res.render("index.ejs", {
                        products:products
                    })
                })
    }
}