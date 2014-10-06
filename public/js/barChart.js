'use strict';

angular.module('Charts.directives', [])
    .directive('barChart', function(){
        return {
            restrict: 'EAC',
            replace: true,
            scope: {val: '='},
            controller: 'ChartDirectiveController',
            compile: function(scope, elm, attrs){
                return function(scope, $element, $attr) {
                    scope.$watch('val', function(value) {
                        console.log('value changed');
                        var chartdata = scope.getChartData(value);
                        var options = chartdata.options;
                        var defaults = {
                            credits: {
                                enabled: false
                            },
                            chart: {
                                type: 'column'
                            },
                            plotOptions: {
                                column: {
                                    pointPadding: 0.2,
                                    borderWidth: 0,
                                    colorByPoint: true
                                },
                                series: {
                                    cursor: 'pointer',
                                    states: {
                                        hover: {
                                            enabled: false
                                        }
                                    }
                                }
                            }
                        };
                        var chart = new Highcharts.Chart(Highcharts.merge(defaults, options));
                    });

                }

            }
        };
    });
