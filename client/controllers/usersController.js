blackbelt.controller('usersController', function(userFactory, $location){

	userFactory.getName(function(data){
		if(data.name){
			$location.url('dashboard');
		}
	})

	this.requestName = function(input){
		userFactory.setName(input, function(){
			userFactory.getName(function(data){
				$location.url('dashboard');
			})
		})
		this.input = {};
	}
})
