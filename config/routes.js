let index = require('../controllers/index.js');
let login = require('../controllers/login.js');
let signup = require('../controllers/signup.js');
let listings = require('../controllers/listings.js');
let user = require('../controllers/user.js');
module.exports = function(app){

  app.get('/',index.home);
  app.get('/login',index.login);
  app.get('/signup',index.signup);

  app.post('/login',login.authenticate);
  app.post('/signup',signup.process)
  app.get('/logout',login.logout);

  app.use('/auth', validate);
  app.get('/auth/listings', listings.home);
  app.get('/auth/user/homepage',user.homepage);
  app.get('/auth/user/settings',user.settings);
}

const validate = (req, res, next) => {
  req.session.user ? next() : res.redirect('/');
}
