/* 
* @Author: ThanhCong
* @Date:   2015-04-10 10:02:05
* @Last Modified by:   ThanhCong
* @Last Modified time: 2015-04-10 10:02:53
*/

'use strict';

/* global define */

define(['app'], function(app){
	var directive = function(){
		return {
			templateUrl: 'scripts/view/date-filter.html',
			restrict: 'E',
			replace: true
		};
	};

	app.directive('dateFilter', directive);

	return directive;
});