module.exports = (sequelize, dataTypes) => {
    let alias = "Product";
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
        }
    };
    let config = {
        tableName: 'products',
        timestamps: true,
        // createdAt: 'created_at',
        // updatedAt: 'updated_at',
        underscored: true
    };

    const Product = sequelize.define(alias, cols, config);

    return Product;
}