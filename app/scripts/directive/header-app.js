/* 
* @Author: ThanhCong
* @Date:   2015-04-10 09:30:19
* @Last Modified by:   ThanhCong
* @Last Modified time: 2015-04-10 09:30:58
*/

'use strict';

/* global define */


define(['app'], function(app){
	var directive = function(){
		return {
			templateUrl: 'scripts/view/header-app.html',
			restrict: 'E',
			replace: true
		};
	};

	app.directive('headerApp', directive);

	return directive;
});