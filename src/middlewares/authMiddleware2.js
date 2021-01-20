const db = require('../database/models');

async function authMiddleware2(req, res, next) {
    let users = await db.Users.findAll()
        .then(result => {
            return result;
        })
    let url = req.params;
    let usuarioAIgualar;

    for(let i=0; i<users.length; i++) {
        if(url.id == users[i].id) {
            usuarioAIgualar = users[i].email
        }
    }

    if(req.session.emailUser != usuarioAIgualar) {
        return res.render('error');
    } else {
        next();
    }
}

module.exports = authMiddleware2;