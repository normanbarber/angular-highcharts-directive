'use strict';
angular.module('Charts', ['Charts.directives', 'Charts.directives.controller', 'Charts.controllers', 'Charts.services', 'btford.socket-io']).
	config(['$routeProvider', '$locationProvider', function($routeProvider,$locationProvider) {
	$routeProvider.when('/', {templateUrl: 'views/chart.html', controller: 'ChartController'});
	$routeProvider.otherwise({redirectTo: '/'});
	$locationProvider
		.html5Mode(true);
}]);
