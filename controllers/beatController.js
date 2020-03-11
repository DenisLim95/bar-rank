var User = require('../models/beatModel');

var mongoose = require("mongoose");
// var Grid = require('gridfs-stream');
// var fs = require('fs');
// var mediaserver = require('mediaserver');

// mongoose.connect("mongodb://localhost:27017/rap_rank",{ useNewUrlParser: true });
// Grid.mongo = mongoose.mongo;
const conn = mongoose.createConnection("mongodb://localhost:27017/rap_rank");

conn.once('open', () => {
  // Init stream
  gfs = Grid(conn.db, mongoose.mongo);
  gfs.collection('uploads');
});

// Create storage engine
const storage = new GridFsStorage({
  url: mongoURI,
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      crypto.randomBytes(16, (err, buf) => {
        if (err) {
          return reject(err);
        }
        const filename = buf.toString('hex') + path.extname(file.originalname);
        const fileInfo = {
          filename: filename,
          bucketName: 'uploads'
        };
        resolve(fileInfo);
      });
    });
  }
});
const upload = multer({ storage });





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

// Post new beat (Note, remember we store metadata and actual file in 2 different databases)
exports.upload_beat = function(req, res) {
	res.send("Uploading new beat");

	// Store Metadata

	// Store actual media file in GridFS


	// function UploadToDB(fname) {
	//   // where to find video in the filesystem that we will store in DB
	//   var musicPath = path.join(__dirname, 'readFrom/' + fname);
	//   conn.once('open', function() {
	//     console.log("-Connection open-");
	//     var gfs = Grid(conn.db);
	//     // Will be stored in Mongo as whatever name you specify here.
	//     var writestream = gfs.createWriteStream({
	//       filename: fname
	//     });
	//     // create a read-stream from where the video currently is (musicPath)
	//     // and pipe it into the database (through write-stream)
	//     fs.createReadStream(musicPath).pipe(writestream);

	//     writestream.on('close', function(file) {
	//       // Do something with file
	//       console.log(file.filename + " written to DB Successfully!");
	//     });
	//   });
	// }










}






// Post rendition
exports.upload_rendition = function(req, res) {
	res.send("Uploading rendition to Love - J Dilla, " + req.params.bid);
}

