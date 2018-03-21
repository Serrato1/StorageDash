let knex = require('../db/knex.js');
module.exports = {
  home: function(req,res){
    if(req.session.user){
      res.render('index',{loggedIn: true, login: false, signup: false});
    }else{
      res.render('index',{loggedIn: false, login: false, signup: false});
    }
  },
  signup: function(req,res){
    if(req.session.user){
      res.render('index',{loggedIn: true, login: false, signup: false});
    }else{
      res.render('index',{loggedIn: false, login: false, signup: false});
    }
  }
}
