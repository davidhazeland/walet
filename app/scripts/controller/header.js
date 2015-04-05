/* 
* @Author: ThanhCong
* @Date:   2015-03-30 21:35:01
* @Last Modified by:   ThanhCong
* @Last Modified time: 2015-04-04 17:39:29
*/
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