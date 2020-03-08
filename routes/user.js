var express = require('express');
var router = express.Router();

// Require controller modules.
var user_controller = require('../controllers/userController');


// Routes. Controllers handle these. 
router.get('/ping', user_controller.ping);
router.get('/', user_controller.user_list);
router.get('/:uid', user_controller.get_user);

router.post('/', user_controller.signup);

module.exports = router;
