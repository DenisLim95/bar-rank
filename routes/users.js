var express = require('express');
var router = express.Router();

// Require controller modules.
var user_controller = require('../controllers/userController');


// Routes
router.get('/', user_controller.user_list);
router.get('/ping', user_controller.ping);



module.exports = router;
