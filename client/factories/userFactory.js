blackbelt.factory("userFactory", function($http){
	var user = {};
	user.name = '';

	return {

		getName: function(callback){
			callback(user);
		},

		setName: function(input, callback){
			$http.post('/users', input).then(function(response){
				user = response.data;
				callback();
			})
		},

		listAll: function(callback){
		$http.get('/users').then(callback);
		},

		productOneBid: function(input, callback){
			$http.post('/findUserForOne', input).then(function(response){
				callback(response);
			})
		},

		productTwoBid: function(input, callback){
			$http.post('/findUserForTwo', input).then(function(response){
				callback(response);
			})
		},

		productThreeBid: function(input, callback){
			$http.post('/findUserForThree', input).then(function(response){
				callback(response);
			})
		},

		storeUser: function(input, callback){
			user = input;
			callback();
		},

		retrieveUser: function(callback){
			callback(user);
		},

		resetNumbers: function(){
			$http.get('numberReset');
		}
	}
})
