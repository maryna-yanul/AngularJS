angular.module('directoryApp', [])
	.controller('directoryController', function() {
		var dirList = this;

		dirList.toggle = false;

		dirList.list = [
		{name: 'Marina', age: 24},
		{name: 'Stive', age: 16},
		{name: 'Lo', age: 14},
		{name: 'Sonya', age: 23}
		];

		dirList.addPerson = function() {
			dirList.list.push({name:dirList.name, age:dirList.age});
			dirList.name = '';
			dirList.age = 0;
		};	
	});
