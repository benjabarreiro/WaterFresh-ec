module.exports = (sequelize, dataTypes) => {
    let alias = "Products";
    let cols = {
        id: {
            type: dataTypes.INTEGER(100).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: dataTypes.STRING(60),
            allowNull: false
        },
        price: {
            type: dataTypes.DECIMAL(50, 2),
            allowNull: false
        },
        stock: {
            type: dataTypes.INTEGER(100),
            allowNull: true
        }
    };
    let config = {
        tableName: 'products',
        //timestamps: true,
        //createdAt: 'createdAt',
        //updatedAt: 'updatedAt',
        //underscored: true
    };

    const Product = sequelize.define(alias, cols, config);

    Product.associate = function(models) {

      Product.belongsToMany(models.Users, {
          as: 'user_shopping_cart',
          through: 'products_users',
          foreignKey: 'id_product',
          otherKey: 'id_user',
          timestamps: true
        });

        Product.belongsToMany(models.Transactions, {
          as: 'transactions',
          through: 'products_transactions',
          foreignKey: 'id_product',
          otherKey: 'id_transaction',
          timestamps: true
        });

        Product.hasMany(models.Images, {
          as: 'images',
          foreignKey: 'product_id'
        });

        Product.hasMany(models.Discounts, {
          as: 'discounts',
          foreignKey: 'id_product'
        });

    }

    return Product;
}