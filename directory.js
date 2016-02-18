angular.module('directoryApp', [])
	.controller('directoryController', function($scope) {
		$scope.list = [
		{name: 'Marina', age: 24},
		{name: 'Stive', age: 16},
		{name: 'Lo', age: 14},
		{name: 'Sonya', age: 23}
		]	
		$scope.addPerson = function() {
			$scope.list.push({name:$scope.name, age:$scope.age});
			$scope.name = '';
			$scope.age = 0;
		}	
	});
