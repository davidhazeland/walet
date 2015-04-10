/* 
* @Author: ThanhCong
* @Date:   2015-04-10 09:39:40
* @Last Modified by:   ThanhCong
* @Last Modified time: 2015-04-10 09:39:59
*/

'use strict';

/* global define */

define(['app'], function(app){
	var directive = function(){
		return {
			templateUrl: 'scripts/view/popup/multi-transaction.html',
			restrict: 'E',
			replace: true
		};
	};

	app.directive('multiTransaction', directive);

	return directive;
});