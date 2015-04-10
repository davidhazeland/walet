/* 
* @Author: ThanhCong
* @Date:   2015-04-10 10:04:37
* @Last Modified by:   ThanhCong
* @Last Modified time: 2015-04-10 10:04:54
*/

'use strict';

/* global define */

define(['app'], function(app){
	var directive = function(){
		return {
			templateUrl: 'scripts/view/compare-dashboard.html',
			restrict: 'E',
			replace: true
		};
	};

	app.directive('compareDashboard', directive);

	return directive;
});