/* 
* @Author: ThanhCong
* @Date:   2015-04-10 09:39:11
* @Last Modified by:   ThanhCong
* @Last Modified time: 2015-04-10 09:39:33
*/

'use strict';

/* global define */

define(['app'], function(app){
	var directive = function(){
		return {
			templateUrl: 'scripts/view/popup/save-transaction.html',
			restrict: 'E',
			replace: true
		};
	};

	app.directive('saveTransaction', directive);

	return directive;
});