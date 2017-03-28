var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports = (function(){

	return {

		create: function(req, res){
			User.findOne({name: req.body.name}, function(err, user){

				if(!user){
					var newUser = new User(req.body);
					newUser.save(function(err){
						if(err) console.log(err);
						res.json(newUser);
					})
				}
				else {
					res.json(user);
				}
			});
		},

		getAll: function(req, res){
			User.find({}).populate('user').exec(function(err, users){
				res.json(users);
			})
		},

		updateOne: function(req, res){
			User.findOne({_id: req.body.user._id}, function(err, user){
				user.productOne = req.body.body;
				user.save(function(err){
					res.json(err);
				});
				res.json(user);
			})
		},

		updateTwo: function(req, res){
			User.findOne({_id: req.body.user._id}, function(err, user){
				user.productTwo = req.body.body;
				user.save(function(err){
					res.json(err);
				});
				res.json(user);
			})
		},

		updateThree: function(req, res){
			User.findOne({_id: req.body.user._id}, function(err, user){
				user.productThree = req.body.body;
				user.save(function(err){
					res.json(err);
				});
				res.json(user);
			})
		},

		reset: function(req, res){
			User.find({}, function(err, users){
				for(var i = 0; i < users.length; i++){
					users[i].productOne = 0;
					users[i].productTwo = 0;
					users[i].productThree = 0;
					users[i].save(function(err){
						res.json(err);
					});
					res.json(users);
				}
			})
		}
	}


})();
