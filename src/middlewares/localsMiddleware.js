const db = require('../database/models');

function localsMiddleware(req, res, next) {
    if(req.session.emailUser) {
        db.Users.findOne({
            include: [
                {
                    association: 'products_shopping_cart',
                }
            ],
            where: {
                email: req.session.emailUser
            }
        })
        .then(function(result) {
            res.locals.localUser = {
                id: result.id,
                admin: result.admin,
                cart: result.products_shopping_cart
            }
        })
    }
    next();
}

module.exports = localsMiddleware;