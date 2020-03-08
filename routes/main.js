var express = require('express');
var router = express.Router();

/*
	GET 	/main
*/

router.get('/', function(req, res, next) {
  res.render('main', { title: 'Main' });
});

module.exports = router;
