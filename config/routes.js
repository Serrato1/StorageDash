let index = require('../controllers/index.js');
let login = require('../controllers/login.js');

module.exports = function(app){
  app.use('/',index.home);

  app.use('/login',login.login);
}
