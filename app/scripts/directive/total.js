/* 
 * @Author: ThanhCong
 * @Date:   2015-04-10 10:03:09
 * @Last Modified by:   ThanhCong
 * @Last Modified time: 2015-04-11 20:43:45
 */

'use strict';

/* global define */

define(['app', 'observer'], function(app, Observer) {
	var directive = function() {
		return {
			templateUrl: 'scripts/view/total.html',
			restrict: 'E',
			replace: true
		};
	};

	app.directive('total', directive);

	return directive;
});