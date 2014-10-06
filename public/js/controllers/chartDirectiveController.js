'use strict';

angular.module('Charts.directives.controller', [])
    .controller('ChartDirectiveController', ['$scope', '$log', function(scope, log){

    scope.getChartData = function(message){
        var locationarray = [];
        var itemsPerPage = 0;
        var storage = [];
        var bar_colors =  [];
        var data = message.locations;
        var graphdata;
        var uom;

        for (var i in data) {
            graphdata = [];
            uom = data[i].uom;
            graphdata = parseInt(data[i].onHand);

            if (data[i].onHand <= data[i].safetyLevel) {
                storage.push(graphdata);
                bar_colors.push('#e84c3d');

            }
            else if (data[i].onHand <= data[i].reorderPt) {
                storage.push(graphdata);
                bar_colors.push('#00add5');
            } else {
                storage.push(graphdata);
                bar_colors.push('#72b842');
            }
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
                    data: storage,
                    colors: bar_colors

                }
            ]
        };
        var chartdata = {};
        chartdata.options = options;
        return chartdata;
    }

}]);