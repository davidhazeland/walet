/* 
* @Author: ThanhCong
* @Date:   2015-04-10 10:03:57
* @Last Modified by:   ThanhCong
* @Last Modified time: 2015-04-10 10:04:06
*/

'use strict';

/* global define */

define(['app'], function(app){
	var directive = function(){
		return {
			templateUrl: 'scripts/view/overview.html',
			restrict: 'E',
			replace: true
		};
	};

	app.directive('overview', directive);

	return directive;
});