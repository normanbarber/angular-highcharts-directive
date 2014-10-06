'use strict';

angular.module('Charts.controllers', [])
    .controller('ChartController', ['$scope', '$log', 'chartclient', function(scope, log, chartclient){

    chartclient.emit('connected');
    chartclient.on('data_change', function(message){
        scope.data = message;
    });

    scope.chartConfig = {
        'itemsPerPage': 3,
        'colors':  {
            'OnHand': '#72b842',
            'ReorderPt': '#00add5',
            'SafetyLevel': '#e84c3d',
            'OutOfStock': '#393C45'
        }
    };

    var chartdata = {
        material : "SAND",
        locations : [{
                location: "N. Mel",
                onHand: "214.740",
                uom: "TON",
                capacity : "4340.000",
                reorderPt: "5600.00",
                safetyLevel : "1000.00"
            },
            {
                location: "Indiana",
                onHand: "214.740",
                uom: "LBS",
                capacity : "3300.000",
                reorderPt: "200.00",
                safetyLevel : "100.00"
            },
            {
                location: "Vict",
                onHand: "189.89",
                uom: "LBS",
                capacity : "5700.000",
                reorderPt: "150.00",
                safetyLevel : "100.00"
            }
        ]
    };

    scope.data = chartdata;
}]);



/* post data from rest call http://localhost:8877/chart  */

// {
// "material" : "SAND",
// "locations" : [{
// "location": "N. Mel",
// "onHand": "14.740",
// "uom": "TON",
// "capacity" : "4340.000",
// "reorderPt": "5600.00",
// "safetyLevel" : "1000.00"
// },
// {
// "location": "Indiana",
// "onHand": "4.740",
// "uom": "LBS",
// "capacity" : "3300.000",
// "reorderPt": "200.00",
// "safetyLevel" : "100.00"
// }
//
// ]
// }
//