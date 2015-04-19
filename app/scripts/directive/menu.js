/* 
* @Author: ThanhCong
* @Date:   2015-04-10 09:26:19
* @Last Modified by:   ThanhCong
* @Last Modified time: 2015-04-10 09:26:55
*/

'use strict';

/* global define */

define(['app'], function(app){
	var directive = function(){
		return {
			templateUrl: 'scripts/view/menu.html',
			restrict: 'E',
			replace: true
		};
	};

	app.directive('menu', directive);

	return directive;
});