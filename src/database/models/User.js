module.exports = (sequelize, dataTypes) => {
    let alias = "Users";
    let cols = {
        id: {
            type: dataTypes.INTEGER(100).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        first_name: {
            type: dataTypes.STRING(30),
            allowNull: false
        },
        last_name: {
            type: dataTypes.STRING(30),
            allowNull: false
        },
        username: {
            type: dataTypes.STRING(30),
            allowNull: false
        },
        email: {
            type: dataTypes.STRING(100),
            allowNull: false,
            unique: true
        },
        password: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        repassword: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        address: {
            type:dataTypes.STRING(45),
            defaultValue: 'Unspecified'
        },
        phone: {
            type: dataTypes.STRING(13),
            defaultValue: 0
        },
        admin: {
            type: dataTypes.BOOLEAN(1),
            defaultValue: 0
        }
    };
    let config = {
        tableName: 'users',
        timestamps: false,
        // createdAt: 'created_at',
        // updatedAt: 'updated_at',
        underscored: false
    };

    const User = sequelize.define(alias, cols, config);

    User.associate = function(models){

        User.belongsToMany(models.Products, {
            as: 'products_shopping_cart',
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