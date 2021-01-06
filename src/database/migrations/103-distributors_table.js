'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
      id: {
        type: Sequelize.DataTypes.INTEGER(10).UNSIGNED,
        primaryKey: true,
        autoIncrement: true
      },
      first_name: {
        type: Sequelize.DataTypes.STRING(60),
        allowNull: false
      },
      last_name: {
        type: Sequelize.DataTypes.STRING(60),
        allowNull: false
      },
      username: {
        type: Sequelize.DataTypes.STRING(25),
        allowNull: false,
        unique: true
      },
      email: {
        type: Sequelize.DataTypes.STRING(500),
        allowNull: false,
        unique: true
      },
      password: {
        type:Sequelize.DataTypes.STRING(500),
        allowNull: false
      },
      address: {
        type:Sequelize.DataTypes.STRING(500),
        defaultValue: 'Unspecified'
      },
      phone: {
        type: dataTypes.STRING
      },
      createdAt: Sequelize.DataTypes.DATE,
      updatedAt: Sequelize.DataTypes.DATE
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users')
  }
};