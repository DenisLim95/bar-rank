
var mongoose = require('mongoose');

// Define Schema
var Schema = mongoose.Schema;

var BeatSchema = new Schema({
	bid		: String,
	beatname: String,
	producer: String,
	c_date	: Date
});

// Export function to create User Model Class
module.exports = mongoose.model('BeatModel', BeatSchema);