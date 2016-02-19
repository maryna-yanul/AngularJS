angular.module('directoryApp', ['ngAnimate'])
	.controller('directoryController', function() {
		var dirList = this;

		dirList.toggle = false;

		dirList.list = [
		{name: 'Marina', age: 24, img:'http://www.npg.org.uk/assets/microsites/bp2016/images/home_1.jpg'},
		{name: 'Steve', age: 16, img:'http://www.fubiz.net/wp-content/uploads/2011/08/martin-schoeller-barack-obama-portrait.jpeg'},
		{name: 'Lo', age: 14, img:'http://thehudgens.org/wp-content/uploads/2013/03/chambers-portrait-by-Jason-Travis.jpg'},
		{name: 'Sonya', age: 23, img:'http://www.canvaz.com/portrait/charcoal-1.jpg'}
		];

		dirList.addPerson = function() {
			dirList.list.push({name:dirList.name, age:dirList.age});
			dirList.name = '';
			dirList.age = 0;
		};
	});
