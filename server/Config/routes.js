var users = require('../controllers/users');

module.exports = function(app){
	app.post('/users', users.create);
	app.get('/users', function(req, res){
		users.getAll(req, res);
	})
	app.post('/findUserForOne', function(req, res){
		users.updateOne(req, res);
	})
	app.post('/findUserForTwo', function(req, res){
		users.updateTwo(req, res);
	})
	app.post('/findUserForThree', function(req, res){
		users.updateThree(req, res);
	})
	app.get('/numberReset', function(req, res){
		users.reset(req, res);
	})
}
