module.exports = (sequelize, dataTypes) => {
    let alias = "Distributor";
    let cols = {
        id: {
            type: dataTypes.INTEGER(10),
            primaryKey: true,
            autoIncrement: true
        },
        first_name: {
            type: Sequelize.DataTypes.STRING(60),
            allowNull: false
        },
        last_name: {
            type: Sequelize.DataTypes.STRING(60),
            allowNull: false
        },
        username: {
            type: Sequelize.DataTypes.STRING(25),
            allowNull: false,
            unique: true
        },
        email: {
            type: Sequelize.DataTypes.STRING(500),
            allowNull: false,
            unique: true
        },
        password: {
            type:dataTypes.STRING(500),
            allowNull: false
        },
        address: {
            type:dataTypes.STRING(500),
            defaultValue: 'Unspecified'
        },
        phone: {
            type: dataTypes.STRING
        }
    };
    let config = {
        tableName: 'distributors',
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        underscored: true
    };

    const Distributor = sequelize.define(alias, cols, config);

    return Distributor;
}