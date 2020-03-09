var User = require('../models/beatModel');


// 


// Service Layer
// These are a list of methods/functions/services

// ping test
exports.ping = function(req, res) {
	res.send('Pong');
};

// Get beat
// input: beat id
// output: view of a beat page.
exports.get_beat = function(req, res) {

	// Need to get 1. beat details
	// 2. All renditions of this beat.
	Beat.find({username:"J Dilla"})
	.then(function(result) {
		user_info = result[0];
		Beat.find({producer:"J Dilla"})
		.then(function(result) {
			beats = result;
			res.render('profile', { user: user_info , beats: beats});
		});
	});

	res.send("Love - J Dilla, " + req.params.bid);
};

// Show user details
exports.get_rendition = function(req, res) {
	res.send(req.params.rid + " rendition of "  + req.params.bid);
};

// Post new beat (Note, remember we store metadata and actual file in 2 different databases)
exports.upload_beat = function(req, res) {

	res.send("Uploading new beat");
}

// Post rendition
exports.upload_rendition = function(req, res) {
	res.send("Uploading rendition to Love - J Dilla, " + req.params.bid);
}

