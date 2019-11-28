var express = require('express');
var router = express.Router();

router.get('/',function(req, res){
  res.render('index');
});

router.get('/output.html',(req,res)=>{
  res.render('output');
});

router.use('/training',require('./training'));
router.use('/recognize',require('./recognize'));

router.get('/example',function(req, res){
  res.render('example');
});



module.exports = router;
