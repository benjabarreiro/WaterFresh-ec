'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('games', {
      id: {
        type: Sequelize.DataTypes.INTEGER(100).UNSIGNED,
        primaryKey: true,
        autoIncrement: true
      },
      title: {
        type: Sequelize.DataTypes.STRING(60),
        allowNull: false
      },
      description: {
        type: Sequelize.DataTypes.TEXT,
        allowNull: false,
      },
      price: {
        type:Sequelize.DataTypes.DECIMAL(50, 2),
        allowNull: false
      },
      createdAt: Sequelize.DataTypes.DATE,
      updatedAt: Sequelize.DataTypes.DATE
      })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('games')
  }
};