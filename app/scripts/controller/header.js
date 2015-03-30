'use strict';

/* global define */

define(['app', 'jquery'], function(app, $){
	var controller = ['$scope', function($scope) {
		$scope.toggleMenu = function() {
			// $('#menu').toggleClass('collapsed');
			$('#feature').toggleClass('collapsed');
		};
	}];

	app.controller('HeaderCtrl', controller);

	return app;
});