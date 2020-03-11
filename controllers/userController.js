var User = require('../models/userModel');
var Beat = require('../models/beatModel');

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

// doSomething()
// .then(function(result) {
//   return doSomethingElse(result);
// })
// .then(function(newResult) {
//   return doThirdThing(newResult);
// })
// .then(function(finalResult) {
//   console.log('Got the final result: ' + finalResult);
// })
// .catch(failureCallback);



// Show user details
exports.get_user = function(req, res) {
	var target_user = req.params.uid;
	var user_info;
	var beats;

	// Chain of promises - get user name, then get his/her beats
	User.find({username:"J Dilla"})
	.then(function(result) {
		user_info = result[0];
		Beat.find({producer:"J Dilla"})
		.then(function(result) {
			beats = result;
			res.render('profile', { user: user_info , beats: beats});
		});
	});


};





