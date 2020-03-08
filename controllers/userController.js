var User = require('../models/userModel');

// Service Layer
// These are a list of methods/functions/services

// ping test
exports.ping = function(req, res) {
	res.send('Pong');
};

// var UserSchema = new Schema({
// 	uid		: String,
// 	username: String,
// 	name	: String,
// 	lastname: String,
// 	password: String,
// 	email: String
// });

exports.signup = function(req, res) {
    var userData = {
		uid: "12345678",
		username: "J Dilla",
		name: "JJ",
		lastname: "Dilla",
		password: "yeahyeahg",
		email: "jdilla@gmail.com"
    };
    //use schema.create to insert data into the db
    User.create(userData, function (err, user) {
		if (err) {
			return next(err)
		} else {
			return res.redirect('/main');
		}
    });
};

// Display users
exports.user_list = function(req, res) {
	res.send('NOT IMPLEMENTED: User List');	
};

// Show user details
exports.get_user = function(req, res) {
	res.send('User: ' + req.params.uid);
};