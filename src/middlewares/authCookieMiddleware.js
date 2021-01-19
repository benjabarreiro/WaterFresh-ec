const db = require('../database/models');

async function authCookieMiddleware(req, res, next) {

    let users = await db.Users.findAll()
        .then(result => {
            return result;
        })

    if(req.cookies.authRemember != undefined && req.session.emailUser == undefined) {
        for(let i=0; i<users.length; i++) {
            if(req.cookies.authRemember == users[i].email) {
                req.session.emailUser = users[i].email
            }
        }
    }
    next();
}

module.exports = authCookieMiddleware;