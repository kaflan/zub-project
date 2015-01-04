(function()	{
	
	var eventInData = {}; 

	var app = angular.module('calendar', []);
	
	app.controller('DateCreateController', ['$scope', function($scope){
		$scope.date = new Date();
	}]);

	app.controller("DateController", function() {
	this.product = eventInData;
	});

	app.controller("PriceController", function() {
    this.product = price;
	});


})();
