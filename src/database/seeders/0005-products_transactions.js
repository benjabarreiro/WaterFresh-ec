'use strict';

const agregandoJuegosaCompras = [];

for(let i = 1; i <=50; i++){
  agregandoJuegosaCompras.push({
      id_product: Math.floor(Math.random() * 24) + 1,
      id_transaction: i<25 ? i : (Math.floor(Math.random() * 25) + 1),
      createdAt: new Date(),
      updatedAt: new Date()
    })
}
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('products_transactions',agregandoJuegosaCompras,{});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('products_transactions',null,{});
  }
};