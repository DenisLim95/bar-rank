
var mongoose = require('mongoose');

// Define Schema
var Schema = mongoose.Schema;

var BeatSchema = new Schema({
	bid		: String,
	beatname: String,
	producer: String,
	upvotes : Number,
	src		: String // this is the location of actual file in GridFS database.
	// TODO: later include date created here.
});

// Export function to create User Model Class
module.exports = mongoose.model('Beat', BeatSchema);