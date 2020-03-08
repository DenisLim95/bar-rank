var express = require('express');
var router = express.Router();

// Require controller modules.
var user_controller = require('../controllers/userController');


/*
	GET 	/user/
	GET 	/user/ping
	GET 	/user/:uid/
	POST 	/user
*/


// PING
router.get('/ping', user_controller.ping);

// GET USER LIST
router.get('/', user_controller.user_list);

// GET USER PROFILE
router.get('/:uid', user_controller.get_user);

// SIGNUP NEW USER
router.post('/', user_controller.signup);


module.exports = router;
