const knex = require('../db/knex')

module.exports = {
  homepage: function(req,res){
    res.redirect('/');
  },
  settings: function(req,res){
    res.render('user_settings');
  }
}
