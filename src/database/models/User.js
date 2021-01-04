module.exports = (sequelize, dataTypes) => {
    let alias = "User";
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
            type:Sequelize.DataTypes.STRING(500),
            allowNull: false
        },
        address: {
            type:Sequelize.DataTypes.STRING(500),
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

    return User;
}