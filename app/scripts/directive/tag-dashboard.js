/* 
* @Author: ThanhCong
* @Date:   2015-04-10 10:04:15
* @Last Modified by:   ThanhCong
* @Last Modified time: 2015-04-10 10:04:28
*/

'use strict';

/* global define */

define(['app'], function(app){
	var directive = function(){
		return {
			templateUrl: 'scripts/view/tag-dashboard.html',
			restrict: 'E',
			replace: true
		};
	};

	app.directive('tagDashboard', directive);

	return directive;
});