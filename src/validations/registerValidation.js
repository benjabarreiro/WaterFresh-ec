const {check, validationResult, body} = require('express-validator');
const db = require('../database/models');

module.exports = [
    check('first_name')
        .isAlpha()
        .isLength({min: 1, max: 50})
            .withMessage('Tu nombre no puede tener números ni caracteres especiales, ni más de 50 caracteres'),
    
    check('last_name')
        .isAlpha()
        .isLength({min: 1, max: 50})
            .withMessage('Tu apellido no puede tener números ni carácteres especiales, ni más de 50 caracteres especiales'),
    
    check('username')
        .isLength({min: 5, max: 20})
            .withMessage('Tu nombre de usuario tiene que tener entre 5 y 20 caracteres'),

    body('username')
        .custom(async function(value) {
            let usuario = await db.Users.findOne({where: {username: value}})
                .then(function(elUsuario) {
                    if(elUsuario) {
                        return false;
                    } else {
                        return true;
                    }
                })
                return usuario;
        })
            .withMessage('Este nombre de usuario ya está en uso'),

    check('email')
        .isEmail()
            .withMessage('Tenés que insertar un email válido'),

    body('email')
        .custom(async function(value) {
            let usuario = await db.Users.findOne({where: {email: values}})
                .then(function(elUsuario) {
                    if (elUsuario) {
                        return false;
                    } else {
                        return true;
                    }
                })
                return usuario;
        })
            .withMessage('Esta dirección de email ya está en uso'),

    check('password')
        .isLength({min: 6, max: 16})
            .withMessage('La contraseña debe tener entre 6 y 16 caracteres'),
    
    check('repassword')
        .isLength({min: 6, max: 16})
            .withMessage('La repetición de la contraseña debe tener entre 6 y 16 caracteres'),

    body('repassword')
        .custom(async (repassword, {req}) => {
            const password = req.body.password

            if(password !== repassword) {
                throw new Error('Las contraseñas no coinciden')
            }
        })
]