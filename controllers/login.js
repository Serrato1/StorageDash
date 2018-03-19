
module.exports = {
  login: function(req,res){
    console.log(req.session);
    res.render("login")
  }
}
