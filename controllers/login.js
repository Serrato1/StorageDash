let knex = require("../db/knex");
module.exports = {
  login: function(req,res){
    console.log(req.session);
    res.render('index',{login : true});
  },
  authenticate: function(req,res){
    req.session.user = "admin";
    console.log(req.session.user);
    res.redirect('/auth/listings');
  }
}
