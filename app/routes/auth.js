var authController = require('../controller/authController');

module.exports = function (app, passport) {

  app.get('/login', authController.login);
  app.get('/createaccount', authController.createAccount);
  app.get('/logout', authController.logout);

  app.post('/createaccount', passport.authenticate('local-signup', {
    successRedirect: '/login',
    failureRedirect: '/createaccount'
  }));

  // Authentication post
  app.post('/login', passport.authenticate('local-signin', {
    successRedirect: '/dashboard',
    failureRedirect: '/login'
  }));

}