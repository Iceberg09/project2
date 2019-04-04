var publicController = require('../controller/publicController.js');


module.exports = function(app, models) {

    app.get('/', publicController.home);
    
};
module.exports = function(app, models) {

    app.get('/login', publicController.login);
    
};
module.exports = function(app, models) {

    app.get('/createaccount', publicController.createAccount);
    
};

module.exports = function(app, models) {

    app.get('/*', publicController.fourohfour);

};