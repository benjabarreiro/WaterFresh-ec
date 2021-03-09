module.exports = (sequelize, dataTypes) => {
    let alias = "LandingPage";
    let cols = {
        id: {
            type: dataTypes.INTEGER(100).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING(30),
            allowNull: false
        },
        email: {
            type: dataTypes.STRING(100),
            allowNull: false,
            unique: true
        },
        phone: {
            type: dataTypes.STRING(13),
            defaultValue: 0
        }
    };
    let config = {
        tableName: 'landingpage',
        timestamps: false,
        // createdAt: 'created_at',
        // updatedAt: 'updated_at',
        underscored: false
    };

    const LandingPage = sequelize.define(alias, cols, config);
    
    return LandingPage;
}