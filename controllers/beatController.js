var User = require('../models/beatModel');

// var mongoose = require("mongoose");
// var Grid = require('gridfs-stream');
// var fs = require('fs');
// var mediaserver = require('mediaserver');

// mongoose.connect("mongodb://localhost:27017/rap_rank",{ useNewUrlParser: true });
// Grid.mongo = mongoose.mongo;
// const conn = mongoose.createConnection("mongodb://localhost:27017/bar_rank");



// ping test
exports.ping = function(req, res) {
	res.send('Pong');
};

exports.test = function(req, res) {
	res.send('testing...');
}

exports.upload_page = function(req, res) {
	console.log("upload beat??");
	res.render('uploadbeat');
};

// Get beat
// input: beat id
// output: view of a beat page.
exports.get_beat = function(req, res) {

	res.send('GET BEAT');
	// Need to get 1. beat details
	// 2. All renditions of this beat.
	var bid = req.params.bid;


	// The controller extracts data from req/res params.
	// The controller passes this info to the Service Layer
	// Service Layer does the business logic (The logical steps to a transaction that any person can understand).
	// Service Layer is a collection of classes.
	// Service layer does not access SQL. Data access is done in a separate Data Access Layer. 
};

// Get rendition
// input: rendition id
// output: view of a rendition page.
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

