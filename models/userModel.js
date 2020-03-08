
var mongoose = require('mongoose');
var mongoDB = 'mongodb://localhost:27017/bar_rank';
mongoose.connect(mongoDB, {useNewUrlParser: true});

// Define Schema
// var Schema = mongoose.Schema;

var UserSchema = new mongoose.Schema({
	uid		: String,
	username: String,
	name	: String,
	lastname: String,
	password: String,
	email: String
});

// Export function to create User Model Class
module.exports = mongoose.model('User', UserSchema);