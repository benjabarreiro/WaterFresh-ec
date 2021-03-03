module.exports = (sequelize, dataTypes) => {
    let alias = "Distributors";
    let cols = {
        id: {
            type: dataTypes.INTEGER(100),
            primaryKey: true,
            autoIncrement: true
        },
        company_name: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        email: {
            type: dataTypes.STRING(100),
            allowNull: false,
            unique: true
        },
        address: {
            type:dataTypes.STRING(45),
            defaultValue: 'Unspecified'
        },
        phone: {
            type: dataTypes.STRING(13),
            allowNull: false
        },
        appointment: {
            type: dataTypes.DATE,
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