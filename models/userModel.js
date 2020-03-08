
var mongoose = require('mongoose');

// Define Schema
var Schema = mongoose.Schema;

var UserSchema = new Schema({
	uid		: String,
	username: String,
	name	: String,
	lastname: String,
	password: String,
	email: String
});

// Export function to create User Model Class
module.exports = mongoose.model('UserModel', UserSchema);