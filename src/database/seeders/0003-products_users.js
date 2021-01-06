'use strict';
const faker = require('faker');

const creandoCarritos = [];

for(let i = 0; i <50; i++){
  creandoCarritos.push({
      id_product: Math.floor(Math.random() * 24) + 1,
      id_user: Math.floor(Math.random() * 25) + 1,
      createdAt: new Date(),
      updatedAt: new Date()
    })
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('products_users',creandoCarritos,{});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('products_users',null,{});
  }
};