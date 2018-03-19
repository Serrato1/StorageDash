let index = require('../controllers/index.js');
let login = require('../controllers/login.js');

module.exports = function(app){
  app.get('/',index.home);
  app.get('/login',login.login);

}
