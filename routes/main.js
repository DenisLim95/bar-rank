var express = require('express');
var router = express.Router();

/*
	GET 	/main
	GET 	/main/:id
	GET 	/main/:id/rendition/:rid
	POST 	/main/:id
*/

router.get('/', function(req, res, next) {
  // res.send('This is the Main page');
  res.render('main', { title: 'Main' });
});

module.exports = router;
