
//Routing
var app = angular.module('adsProject', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider.when('/home', {
		templateUrl: 'html/home.html',
		controller: 'AllAds'
	});
	$routeProvider.when('/login', {
		templateUrl: 'html/login.html',
		controller: 'Login'
	});
	$routeProvider.when('/register', {
		templateUrl: 'html/register.html',
		controller: 'Register'
	});
	$routeProvider.otherwise({
		templateUrl: 'html/home.html', 
		controller: "AllAds"
	});
});

//Controllers
app.controller('AllAds', function($scope, $http){
	$http({ 
		method: 'GET', 
		url: 'http://softuni-ads.azurewebsites.net/api/Ads?PageSize=5' 
	})
	.success(function (data, status, headers, config) {
		//alert("OK");
		console.log(data);
		$scope.data = data;
		$scope.numPages = data["numPages"];
		

	})
	.error(function (data, status, headers, config) {
		alert("Error");
	});
	
	//used to generate pager like pass number of pages from data object
	$scope.getNumber = function(num) {
		return new Array(num);   
	}
	
	$scope.pager = function(page){
		$http({ 
			method: 'GET', 
			url: 'http://softuni-ads.azurewebsites.net/api/Ads?StartPage=' + page + '&PageSize=5' 
		})
		.success(function (data, status, headers, config) {
			alert("OK");
			console.log(data);
			$scope.data = data;
		})
		.error(function (data, status, headers, config) {
			alert("Error");
		});
	}
});

app.controller('Login', function($scope){
	$scope.message = "Login Page";
});

app.controller('Register', function($scope){
	$scope.message = "Register Page";
});
