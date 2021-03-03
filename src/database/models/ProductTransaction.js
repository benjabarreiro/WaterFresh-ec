module.exports = (sequelize, dataTypes) => {
    let alias = 'Products_Transactions';

    let cols = {
        id: {
            type: dataTypes.INTEGER(100).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        id_product: {
            type: dataTypes.INTEGER(100).UNSIGNED,
            allowNull: true
        },
        id_transaction: {
            type: dataTypes.INTEGER(100).UNSIGNED,
            allowNull: false
        }
    };

    let config = {
        tableName: 'products_transactions'
    };

    const Product_Transaction = sequelize.define(alias, cols, config);
    return Product_Transaction;
}