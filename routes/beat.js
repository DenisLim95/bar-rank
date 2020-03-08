var express = require('express');
var router = express.Router();

var beat_controller = require('../controllers/beatController');

/*
	GET 	/beat/ping
	GET 	/beat/:id
	GET 	/beat/:id/rendition/:rid
	POST 	/beat
	POST 	/beat/:id
*/

// PING
router.get('/ping', beat_controller.ping);

// GET BEAT
router.get('/:bid', beat_controller.get_beat);

// GET RENDITION
router.get('/:bid/rendition/:rid', beat_controller.get_rendition);

// UPLOAD MY BEAT
router.post("/", beat_controller.upload_beat);

// UPLOAD MY RENDITION
router.post("/:bid", beat_controller.upload_rendition);


module.exports = router;
