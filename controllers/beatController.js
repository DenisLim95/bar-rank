var Beat = require('../models/beatModel');

// var mongoose = require("mongoose");
// var Grid = require('gridfs-stream');
// var fs = require('fs');
// var mediaserver = require('mediaserver');

// mongoose.connect("mongodb://localhost:27017/rap_rank",{ useNewUrlParser: true });
// Grid.mongo = mongoose.mongo;
// const conn = mongoose.createConnection("mongodb://localhost:27017/bar_rank");

// DB
const mongoose = require("mongoose");

const mongoURI = "mongodb://localhost:27017/bar_rank";

// connection
const conn = mongoose.createConnection(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// init gfs
let gfs;
conn.once("open", () => {
  // init stream
  gfs = new mongoose.mongo.GridFSBucket(conn.db, {
    bucketName: "uploads"
  });
});




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

	var bid = mongoose.Types.ObjectId(req.params.bid);

	const file = gfs.find({
		_id: bid
	})
	.toArray((err, files) => {
		if (!files || files.length === 0) {
			return res.status(404).json({
				err: "no files exist"
		    });
		}
		gfs.openDownloadStream(bid).pipe(res);
	});
};

// Get rendition
// input: rendition id
// output: view of a rendition page.
exports.get_rendition = function(req, res) {
	res.send(req.params.rid + " rendition of "  + req.params.bid);
};

// Post new beat (Note, remember we store metadata and actual file in 2 different databases)
exports.upload_beat = function(req, res) {
	// Store metadata into our own collection.
	var file_metadata = req.file;		
	var bid = file_metadata.id;
	var name = req.body.beatname;
	var producer = req.body.producername;
	var upvotes = 0;

	// Do Checks here...

	var newBeat_data = {	
		bid: bid, 
		name: name, 
		producer: producer, 
		upvotes: upvotes
	};

	const newBeat = new Beat(newBeat_data);
	newBeat.save(function (err) {
		if (err) {
			res.send("Error")
		} else {
			res.send("Succesfully uploaded!");
		}
	});
}






// Post rendition
exports.upload_rendition = function(req, res) {
	res.send("Uploading rendition to Love - J Dilla, " + req.params.bid);
}

