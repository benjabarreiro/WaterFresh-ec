module.exports = (sequelize, dataTypes) => {
    let alias = 'Products_Users';

    let cols = {
        id: {
            type: dataTypes.INTEGER(100).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },

        id_product: {
            type: dataTypes.INTEGER(100).UNSIGNED,
            allowNull: false,
            references: {
                model: 'Products',
                key: 'id'
            }
        },

        id_user: {
            type: dataTypes.INTEGER(100).UNSIGNED,
            allowNull: false,
            references: {
                model: 'Users',
                key: 'id'
            }
        }
    };

    let config = {
        tableName: 'products_users'
    };

    const Product_User = sequelize.define(alias, cols, config);
    return Product_User;
}