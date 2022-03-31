var express = require('express');

const router = express.Router();

router.get('/', function(req, res, next){
  res.render('index', {title: 'dev Skills'})
});
module.exports = router;