module.exports = (sequelize, dataTypes) => {
    let alias = "Distributors";
    let cols = {
        id: {
            type: dataTypes.INTEGER(100),
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
            allowNull: false,
            unique: true
        },
        email: {
            type: dataTypes.STRING(100),
            allowNull: false,
            unique: true
        },
        password: {
            type:dataTypes.STRING(16),
            allowNull: false
        },
        repassword: {
            type:dataTypes.STRING(16),
            allowNull: false
        },
        address: {
            type:dataTypes.STRING(45),
            defaultValue: 'Unspecified'
        },
        phone: {
            type: dataTypes.STRING(13),
            allowNull: false
        }
    };
    let config = {
        tableName: 'distributors',
        timestamps: false,
        //createdAt: 'created_at',
        //updatedAt: 'updated_at',
        underscored: false
    };

    const Distributor = sequelize.define(alias, cols, config);

    return Distributor;
};