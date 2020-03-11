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

// Remember that routes should go from specific to broad! (due to :id thing).

// PING
router.get('/ping', beat_controller.ping);

// TEST
router.get('/test', beat_controller.test);

// UPLOAD BEAT PAGE
router.get('/upload', beat_controller.upload_page);

// GET BEAT
router.get('/:bid', beat_controller.get_beat);

// GET RENDITION
router.get('/:bid/rendition/:rid', beat_controller.get_rendition);



// UPLOAD MY BEAT ACTION
router.post("/", beat_controller.upload_beat);

// UPLOAD MY RENDITION
router.post("/:bid", beat_controller.upload_rendition);


module.exports = router;
