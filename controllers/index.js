let knex = require('../db/knex.js');
module.exports = {
  home: function(req,res){
    res.render('index',{login: false, signup: false});
  },
  signup: function(req,res){
    res.render('index',{login:false,signup:true})
  }
}
