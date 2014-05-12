var express = require('express')
var router = express.Router()

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

module.exports = router
