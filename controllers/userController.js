var User = require('../models/userModel');

// Service Layer
// These are a list of methods/functions/services

// ping test
exports.ping = function(req, res) {
	res.send('Pong');
};

// Display users
exports.user_list = function(req, res) {
	res.send('NOT IMPLEMENTED: User List');	
};

// Show user details
exports.get_user = function(req, res) {
	res.send('User: ' + req.params.uid);
};