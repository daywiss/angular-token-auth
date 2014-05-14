var express = require('express');
var router = express.Router();
var path = require('path')

/* GET home page. */
router.get('/', function(req, res) {
  console.log('requesting index')
  res.render('index');
});


//snippet from daftmonk/angular-fullstack generated file
router.get('/partials/*',function(req, res) {
  var stripped = req.url.split('.')[0];
  var requestedView = path.join('./', stripped);
  res.render(requestedView, function(err, html) {
    if(err) {
      console.log("Error rendering partial '" + requestedView + "'\n", err);
      res.status(404);
      res.send(404);
    } else {
      res.send(html);
    }
  });
});

router.get('*',function(req,res){
  res.render('index')
})

module.exports = router;
