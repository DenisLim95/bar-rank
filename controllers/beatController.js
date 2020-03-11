


var User = require('../models/beatModel');


// const BeatService = require('../services/BeatService.js');


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
	var bid = req.params.bid;


	// The controller extracts data from req/res params.
	// The controller passes this info to the Service Layer
	// Service Layer does the business logic (The logical steps to a transaction that any person can understand).
	// Service Layer is a collection of classes.
	// Service layer does not access SQL. Data access is done in a separate Data Access Layer. 

	// let beatService = new BeatService('Denis', 'Lim');
	// console.log(beatService.sayHi2());
	

	// Beat.find({_id:ObjectId(bid)})
	// .then(function(result) {
	// 	beat_info = result[0];

	// })




	// This is the hardcoded version
	// Beat.find({username:"J  Dilla"})
	// .then(function(result) {
	// 	user_info = result[0];
	// 	Beat.find({producer:"J Dilla"})
	// 	.then(function(result) {
	// 		beats = result;
	// 		res.render('profile', { user: user_info , beats: beats});
	// 	});
	// });
	// res.send("Love - J Dilla, " + req.params.bid);
};

// Get rendition
// input: rendition id
// output: view of a rendition page.
exports.get_rendition = function(req, res) {
	res.send(req.params.rid + " rendition of "  + req.params.bid);
};

// 
// Post new beat (Note, remember we store metadata and actual file in 2 different databases)
exports.upload_beat = function(req, res) {
	res.send("Uploading new beat");
}

// Post rendition
exports.upload_rendition = function(req, res) {
	res.send("Uploading rendition to Love - J Dilla, " + req.params.bid);
}

