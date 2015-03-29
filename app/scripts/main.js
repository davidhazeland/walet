'use strict';

/* global require */

require([
	'angular', 
	'templates', 
	'filter/index', 
	'controller/index', 
	'directive/index'
	], function(angular) {
	angular.bootstrap(document, ['portfolio']);
});
