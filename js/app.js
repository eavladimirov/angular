
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
	$scope.message = "Home Page";
	
	$http({ 
		method: 'GET', 
		url: 'http://softuni-ads.azurewebsites.net/api/Ads' 
	})
	.success(function (data, status, headers, config) {
		alert("OK");
		console.log(data);
	})
	.error(function (data, status, headers, config) {
		alert("Error");
	});
});

app.controller('Login', function($scope){
	$scope.message = "Login Page";
});

app.controller('Register', function($scope){
	$scope.message = "Register Page";
});
