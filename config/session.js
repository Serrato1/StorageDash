let session = require('session');
let KnexSessionStore = require('connect-session-knex');
var knex = require('../db/knex.js');

module.exports = function(app){
  const store = new KnexSessionStore({
    knex: knex,
    tablename: 'sessions'
  })
}
app.use(session({
  secret:'keyboard cat',
  cookie: {
    maxAge: 2592000000
  }
  resave:false,
  saveUninitialized: false,
  store: store
}))
