'use strict';
angular.module('Charts.services', [])
	.factory('chartclient', function (socketFactory) {
		return socketFactory({
			ioSocket: io.connect('/io_chartserver')
		});
	});
