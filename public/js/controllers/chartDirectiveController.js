'use strict';

angular.module('Charts.directives.controller', [])
	.controller('ChartDirectiveController', ['$scope', '$log', function(scope, log){

		scope.getChartData = function(message){
			var locationarray = [];
			var itemsPerPage = 0;
			var onhand = [];
			var barcolors =  [];
			var data = message.locations;
			var graphdata;

			for (var i in data) {
				graphdata = [];
				graphdata = parseInt(data[i].onHand);
				onhand.push(graphdata);
				barcolors.push(data[i].color);
				locationarray.push(data[i].location);
				itemsPerPage++;
			}

			var options = {
				chart: {
					renderTo: angular.element(document.querySelector('.charts'))[0]
				},
				title: {
					text: ''
				},
				xAxis: {
					categories: locationarray,
					max: itemsPerPage - 1
				},
				series: [
					{
						maxPointWidth: 10,
						data: onhand,
						colors: barcolors

					}
				]
			};
			var chartdata = {};
			chartdata.options = options;
			return chartdata;
		}

}]);