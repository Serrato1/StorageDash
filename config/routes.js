let index = require('../controllers/index.js');
module.exports = function(app){
  app.use('/',index.home)
}
