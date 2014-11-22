'use strict';

angular.module('Charts.controllers', [])
	.controller('ChartController', ['$scope', '$log', 'chartclient', function(scope, log, chartclient){

	chartclient.emit('connected');
	chartclient.on('data_change', function(message){
		scope.data = message;
	});

	scope.chartConfig = {
		'itemsPerPage': 3
	};

	var chartdata = {
		material : "SAND",
		locations : [{
				location: "Dublin",
				onHand: "214.74",
				color: "#e84c3d"
			},
			{
				location: "Martinsburg",
				onHand: "174.74",
				color: "#00add5"
			},
			{
				location: "Sandusky",
				onHand: "189.89",
				color: "#72b842"
			}
		]
	};
	scope.data = chartdata;
}]);



