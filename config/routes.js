let index = require('../controllers/index.js');
let login = require('../controllers/login.js');
let listings = require('../controllers/listings.js');

module.exports = function(app){

  app.get('/',index.home);
  app.get('/login',login.login);
  app.post('/login',login.authenticate);
  app.get('/signup',index.signup);

  app.get('/logout',login.logout);

  app.use('/auth', validate)
  app.get('/auth/listings', listings.home)
}

const validate = (req, res, next) => {
  req.session.user ? next() : res.redirect('/');
}
