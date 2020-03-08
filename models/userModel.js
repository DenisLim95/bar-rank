
var mongoose = require('mongoose');

// Define Schema
var Schema = mongoose.Schema;

var UserSchema = new Schema({
	uid		: String,
	username: String,
	c_date	: Date,
	name	: String,
	lastname: String
});

// Export function to create User Model Class
module.exports = mongoose.model('UserModel', UserSchema);