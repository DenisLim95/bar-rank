var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('This is the Main page');
  res.render('main', { title: 'Main' });
});

/* GET users listing. */
router.get('/cool', function(req, res, next) {
  // res.send('This is the Main page');
  res.send("HELLO BIATCH");
});

module.exports = router;
