var passport = require('passport')
var LocalStrategy = require('passport-local').Strategy
var shortid = require('short-id')
var path = require('path')
//var roles = require(path.join(__dirname,'public/scripts/roles'))
var roles = require(path.join(path.dirname(require.main.filename),'public/scripts/roles'))
//var db = require('../database')

var userRoles = roles.userRoles
var accessLevels = roles.accessLevels

var userStorage = {
  'johnm': { name: 'John', username: 'johnm', password: 'hello', email: 'john.dott@myemail.com', userRole: userRoles.user, tokens: [] },
  'sandrab': { name: 'Sandra', username: 'sandrab', password: 'world', email: 'bitter.s@provider.com', userRole: userRoles.admin, tokens: [] }
}

//db.users.put('root',{username:'root',password:'admin'},function(err){
  //if(err)console.log(err)
//})

passport.use(new LocalStrategy(
  function(username,password,done){
    console.log(username,password)
    if(userStorage[username]){
      var user = userStorage[username]
    //db.users.byUsername.get(username,function(err,user){
      if(err) return done('No User found ' + username,false)  
      if(!user) return done('No user found',false)
      if(user.password === password) return done(null,user)
      done('Passwords dont match',false)
    //})
    }
  }
))
passport.serializeUser(function(user,done){
  //if(user.id == null) user.id = shortid.generate()
  //done(null,user.id)
  done(null,user.username)
})
passport.deserializeUser(function(id,done){
  done(null,userStorage[id])
  //db.users.get(id,function(err,user){
    //if(err) done(err,user)
    //done(null,user)
  //})
})
module.exports = passport
