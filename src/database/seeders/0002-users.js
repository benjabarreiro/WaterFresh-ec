'use strict';
const bcrypt = require('bcrypt');
const faker = require('faker');

const Users=[];

let users = fs.readFileSync(path.join(__dirname, '../../data/users.json'), 'utf8');
users = JSON.parse(users);

users.forEach(function(element){
  Users.push({
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
    return queryInterface.bulkInsert('users', Users, {})},

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users',null,{});
  }
};