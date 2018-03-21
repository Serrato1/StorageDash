let knex = require("../db/knex");
module.exports = {
  login: function(req,res){
    if(req.session.user){
      res.redirect('/auth/listings');
    }else{
      console.log(req.session);
      res.render('index',{loggedIn: false,login : true});
    }
  },
  authenticate: function(req,res){
    req.session.user = "admin";
    console.log(req.session.user);
    res.redirect('/auth/listings');
  }
}
