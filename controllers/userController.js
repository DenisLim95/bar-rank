var User = require('../models/user');


// Display users
exports.user_list = function(req, res) {
	res.send('NOT IMPLEMENTED: User List');
};

// ping test
exports.ping = function(req, res) {
	res.send('Pong');
};