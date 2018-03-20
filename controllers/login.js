let knex = require("../db/knex");
module.exports = {
  login: function(req,res){
    console.log(req.session);
    res.render('index',{login : true});
  }
}
