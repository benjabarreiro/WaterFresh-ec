const {check, validationResult, body} = require('express-validator');
const db = require('../database/models');

module.exports = [
    check('email')
        .isEmail()
            .withMessage('Email inválido'),

    body('email')
        .custom(async function(value) {
            let usuario = await db.Users.findOne({where: {email: value}})
                .then(function(elUsuario) {
                    if(elUsuario) {
                        return true;
                    } else {
                        return false;
                    }
                })
                return usuario;
        })
            .withMessage('Este email no está registrado!'),

    check('password')
        .isLength({min: 6, max: 16})
            .withMessage('La contraseña es incorrecta')
]