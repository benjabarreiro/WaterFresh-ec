function authMiddleware(req, res, next) {
    if(!req.session.emailUser) {
        res.redirect('/users/logIn');
    } else {
        next();
    }
}

module.exports = authMiddleware;