var protectedController = require('../controller/protectedController');

module.exports = function(app, db) {

    app.get('/dashboard', isLoggedIn, protectedController.dashboard);

    function isLoggedIn(req, res, next) {
        if (req.isAuthenticated())
            return next();

        res.redirect('/login');
    }

    app.get('/myprofile', isLoggedIn, protectedController.profile);

    function isLoggedIn(req, res, next) {
        if (req.isAuthenticated())
            return next();

        res.redirect('/login');
    }

    app.get('/settings', isLoggedIn, protectedController.settings);

    function isLoggedIn(req, res, next) {
        if (req.isAuthenticated())
            return next();

        res.redirect('/login');
    }
    app.get('/reports', isLoggedIn, protectedController.reports);

    function isLoggedIn(req, res, next) {
        if (req.isAuthenticated())
            return next();

        res.redirect('/login');
    }
    app.get('/newreview', isLoggedIn, protectedController.newreview);

    function isLoggedIn(req, res, next) {
        if (req.isAuthenticated())
            return next();

        res.redirect('/login');
    }
    app.get('/bestdriver', isLoggedIn, protectedController.bestdriver);

    function isLoggedIn(req, res, next) {
        if (req.isAuthenticated())
            return next();

        res.redirect('/login');
    }
     

    //404 route
    // app.get('/*', isLoggedIn, protectedController.Error);

    // function isLoggedIn(req, res, next) {
    //     if (req.isAuthenticated())
    //         return next();

    //     res.redirect('/login');
    // }


};
