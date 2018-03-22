
module.exports = {
  home: function(req,res){
    res.render('listings',{ user_name : req.session.user.substring(0,req.session.user.indexOf('@'))});
  }
}
