var express = require('express')
var router = express.Router()
var passport = require('passport')
var path = require('path')
var roles = require(path.join(path.dirname(require.main.filename),'public/scripts/roles'))


router.route('/users')
  .get(function(req,res){
    res.status(401).json({error:'Not implemented'})
  })
  .post(function(req,res){
    res.status(401).json({error:'Not implemented'})
  })
  .put(function(req,res){
    res.status(401).json({error:'Not implemented'})
  })
  .delete(function(req,res){
    res.status(401).json({error:'Not implemented'})
  })

router.route('/login')
  .post(passport.authenticate('local',{
    failureRedirect:'/'
    ,successRedirect:'/'
  }))

router.route('/logout')
  .get(function(req,res){
    req.logout()
    res.redirect('/')
  })
module.exports = router
