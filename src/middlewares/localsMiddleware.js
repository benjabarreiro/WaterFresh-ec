const db = require('../database/models');

function localsMiddleware(req, res, next) {
    if(req.session.emailUser) {
        db.Users.findOne({
            where: {
                email: req.session.emailUser
            }
        })
        .then(function(result) {
            res.locals.localUser = {
                id: result.id
            }
        })
    }
    next();
}

module.exports = localsMiddleware;