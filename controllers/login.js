let knex = require("../db/knex");
module.exports = {
  authenticate: function(req,res){
    if(!req.session.user){
      knex('users')
      .where({
        email : req.body.email,
        password : req.body.password
      })
      .then((result)=>{
        console.log(result);
        req.session.user = result[0].email;
        console.log(req.session.user);
        res.redirect('/auth/listings');
      })
      .catch((error)=>{
        console.log(error);
        res.sendStatus(500);
      })
    }
  },
  logout: function(req,res){
    req.session.destroy();
    res.redirect('/');
  }
}
