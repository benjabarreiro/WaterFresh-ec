module.exports = (sequelize, dataTypes) => {
    let alias = 'Images';

    let cols = {
        id: {
            type: dataTypes.INTEGER(100).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        product_id: {
            type: dataTypes.INTEGER(100).UNSIGNED,
            allowNull: false,
            references: {
                model: 'Products',
                key: 'id'
              }
        },
        location: {
            type: dataTypes.STRING(100),
            allowNull: false,
        },
        img_url: {
            type: dataTypes.STRING(500),
        }
        
    };

    let config = {
        tableName: 'images',
    };

    const Image = sequelize.define(alias, cols, config);
    
    Image.associate = function (models) {

        Image.belongsTo(models.Products, {
            as: 'products',
            foreignKey: 'product_id'
        })

    }
    
    return Image;
}