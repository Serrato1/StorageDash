let knex = require('../db/knex.js');
module.exports = {
  home: function(req,res){
    res.render('index',{login: false});
  },
  login: function(req,res){
    res.render('index',{login:true})
  }
}
