var express = require('express');
var router = express.Router();

var beat_controller = require('../controllers/beatController');

/*
	GET 	/main
	GET 	/main/:id
	GET 	/main/:id/rendition/:rid
	POST 	/main/:id
*/

router.get('/ping', beat_controller.ping);

// bid = beat id
router.get('/:bid', beat_controller.get_beat);

router.get('/:bid/rendition/:rid', beat_controller.get_rendition);

router.post("/:bid", beat_controller.upload_rendition);


module.exports = router;
