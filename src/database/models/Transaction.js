module.exports = (sequelize, dataTypes) => {
    let alias = 'Transactions';

    let cols = {
        id: {
            type: dataTypes.INTEGER(100).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        user_id: {
            type: dataTypes.INTEGER(100),
            allowNull: false
        },
        total_cost: {
            type: dataTypes.INTEGER(100),
            allowNull: false
        },
        status: {
            type: dataTypes.STRING(10),
            allowNull: false
        },
        delivery: {
            type: dataTypes.TEXT,
            allowNull: false,
            defaultValue: 'Online'
        },
        payment: {
            type: dataTypes.STRING(50),
            allowNull: false
        }

         
    };

    let config = {
        tableName: 'transactions',
    };

    const Transaction = sequelize.define(alias, cols, config);

    Transaction.associate = function (models) {

    Transaction.belongsToMany(models.Products, {
      as: 'transactions_products',
      through: 'products_transactions',
      foreignKey: 'transaction_id',
      otherKey: 'product_id',
      timestamps: true
    });
    
    Transaction.belongsTo(models.Users, {
      as: 'users',
      foreignKey: "id_user"
    });

  }
    return Transaction;
}