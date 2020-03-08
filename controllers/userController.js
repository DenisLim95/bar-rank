const USER_COLLECTION_NAME = "users";



var User = require('../models/userModel');

// Service Layer
// These are a list of methods/functions/services

// ping test
exports.ping = function(req, res) {
	res.send('Pong');
};

exports.signup = function(req, res) {
    var userData = {
		uid: "123",
		username: "limehead",
		name: "Denis",
		lastname: "Lim",
		password: "yuhyuwh",
		email: "denislim@usc.edu"
    };

    // use schema.create to insert data into the db
    User.create(userData, function (err, user) {
		if (err) {
			return next(err)
		} else {
			return res.send("Done!");
		}
    });

};

// Display users
exports.user_list = function(req, res) {
	User.find({}, function(err, allUsers) {
    if (err) {
      console.log(err);
    } else {
      res.send(allUsers);
    }
  });
};

// Show user details
exports.get_user = function(req, res) {
	var target_user = req.params.uid;
	User.find({username:"limehead"}, (function(err, results){
	    res.send(results);
	}));	
};





