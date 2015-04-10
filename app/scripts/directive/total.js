/* 
* @Author: ThanhCong
* @Date:   2015-04-10 10:03:09
* @Last Modified by:   ThanhCong
* @Last Modified time: 2015-04-10 10:03:19
*/

'use strict';

/* global define */

define(['app'], function(app){
	var directive = function(){
		return {
			templateUrl: 'scripts/view/total.html',
			restrict: 'E',
			replace: true
		};
	};

	app.directive('total', directive);

	return directive;
});