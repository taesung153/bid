blackbelt.controller('dashboardController', function($location, userFactory, $scope, $routeParams){
	$scope.currentUser = {};
	$scope.allUsers = {};

	userFactory.getName(function(data){
		if(!data.name){
			$location.url('/');
		}
		else {
			$scope.currentUser = data;
		}
	})

	function getUsers() {
		userFactory.listAll(function(response){
			for(var i = 0; i < response.data.length; i++){
				if(response.data[i].productOne == 0){
					delete response.data[i].productOne;
				}
				if(response.data[i].productTwo == 0){
					delete response.data[i].productTwo;
				}
				if(response.data[i].productThree == 0){
					delete response.data[i].productThree;
				}
			}
			$scope.allUsers = response.data;
		})
	}
	getUsers();

	$scope.newBidOne = function(input){
		input.user = $scope.currentUser;
		userFactory.productOneBid(input, function(response){
			getUsers();
			$scope.allUsers = response
		});
			$scope.newAmtOne = {};
	}

	$scope.newBidTwo = function(input){
		input.user = $scope.currentUser;
			userFactory.productTwoBid(input, function(response){
			getUsers();
			$scope.allUsers = response
		});
			$scope.newAmtTwo = {};
	}

	$scope.newBidThree = function(input){
		input.user = $scope.currentUser;
			userFactory.productThreeBid(input, function(response){
			getUsers();
			$scope.allUsers = response
		});
				$scope.newAmtThree = {};
	}

	$scope.biddingEnded = function(){
		var countOne = 0;
		var countTwo = 0;
		var countThree = 0;
		getUsers();
		for(var i = 0; i < $scope.allUsers.length; i ++){
			if($scope.allUsers[i].productOne > 0){
				countOne += 1;
			}
			if($scope.allUsers[i].productTwo > 0){
				countTwo += 1;
			}
			if($scope.allUsers[i].productThree > 0){
				countThree += 1;
			}
		}
		if(countOne == 0){
			window.alert("all items must have at least one bid.")
			return false;
		}
		if(countTwo == 0){
			window.alert("all items must have at least one bid.")
			return false;
		}
		if(countThree == 0){
			window.alert("all items must have at least one bid.")
			return false;
		}

		var input = $scope.currentUser;
		userFactory.storeUser(input, function(){
			$location.url('/biddingsummary');
		})
	}
})
