'use strict';
const bcrypt = require('bcrypt');
const faker = require('faker');

const Distributors=[];

let distributors = fs.readFileSync(path.join(__dirname, '../../data/distributors.json'), 'utf8');
distributors = JSON.parse(distributors);

distributors.forEach(function(element){
  Distributors.push({
      id: element.id,
      first_name: element.firstName,
      last_name: element.lastName,
      username: element.username,
      email: element.email,
      password: element.password,
      address: element.address,
      phone: element.phone,
      createdAt: new Date(),
      updatedAt: new Date()
    })
})

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('distributors', Distributors, {})},

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('distributors',null,{});
  }
};