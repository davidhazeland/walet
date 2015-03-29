'use strict';

/* global define */

define(['app'], function(app){
	var directive = function(){
		return {
			templateUrl: 'scripts/view/base.html',
			restrict: 'E',
			replace: true
		};
	};

	app.directive('base', directive);

	return directive;
});