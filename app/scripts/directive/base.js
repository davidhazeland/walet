/* 
* @Author: ThanhCong
* @Date:   2015-03-29 23:41:01
* @Last Modified by:   ThanhCong
* @Last Modified time: 2015-04-04 17:39:06
*/
'use strict';

/* global define */

define(['app'], function(app){
	var directive = function(){
		return {
			templateUrl: 'scripts/view/base.html',
			restrict: 'E'
		};
	};

	app.directive('base', directive);

	return directive;
});