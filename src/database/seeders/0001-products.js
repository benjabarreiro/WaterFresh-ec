'use strict';
const fs = require('fs');
const path = require('path');
const faker = require('faker');

const Products = [];

let products = fs.readFileSync(path.join(__dirname, '../../data/products.json'), 'utf8');
products = JSON.parse(products);

products.forEach(function(element){
  Products.push({
    id : element.id,
    title: element.title,
    price: element.price,
    stock: element.stock,
    createdAt: new Date(),
    updatedAt: new Date()
  })

});


module.exports = {
  up: async (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('products',Products,{});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('products',null,{});
  }
};