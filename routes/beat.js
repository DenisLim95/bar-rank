var express = require('express');
var router = express.Router();
var app = express();

const crypto = require("crypto");
const path = require("path");
const mongoose = require("mongoose");
const multer = require("multer");
const GridFsStorage = require("multer-gridfs-storage");

// DB
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

// Storage
const storage = new GridFsStorage({
  url: mongoURI,
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      crypto.randomBytes(16, (err, buf) => {
        if (err) {
          return reject(err);
        }

        // Might want to perform file checks, such as file type (mp3 restricted).
        console.log(file);

        const filename = file.originalname; // Later change this to some name user specifies in a form or something.
        // const cryptname = buf.toString("hex") + path.extname(file.originalname); // This is if we want to save encrypted name.
        const fileInfo = {
          filename: filename,
          bucketName: "uploads"
        };
        resolve(fileInfo);
      });
    });
  }
});

const upload = multer({
  storage
});




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
router.post("/", upload.single("file"), beat_controller.upload_beat);

// UPLOAD MY RENDITION
router.post("/:bid", beat_controller.upload_rendition);


module.exports = router;
