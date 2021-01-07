module.exports = (sequelize, dataTypes) => {
    let alias = "Users";
    let cols = {
        id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        first_name: {
            type: dataTypes.STRING(60),
            allowNull: false
        },
        last_name: {
            type: dataTypes.STRING(60),
            allowNull: false
        },
        username: {
            type: dataTypes.STRING(60),
            allowNull: false
        },
        email: {
            type: dataTypes.STRING(500),
            allowNull: false,
            unique: true
        },
        password: {
            type:Sequelize.dataTypes.STRING(500),
            allowNull: false
        },
        address: {
            type:Sequelize.dataTypes.STRING(500),
            defaultValue: 'Unspecified'
        },
        phone: {
            type: dataTypes.STRING,
        }
    };
    let config = {
        tableName: 'users',
        timestamps: true,
        // createdAt: 'created_at',
        // updatedAt: 'updated_at',
        underscored: true
    };

    const User = sequelize.define(alias, cols, config);

    User.associate = function(models){

        User.belongsToMany(models.Products, {
            as: 'products_shooping_cart',
            through: 'products_users',
            foreignKey: 'id_user',
            otherKey: 'id_product',
            timestamps: true
        });

        User.hasMany(models.Transactions, {
            as: 'transactions',
            foreignKey: "id_user"
        });
    
    }
    
    return User;
}