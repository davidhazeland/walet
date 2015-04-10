/* 
* @Author: ThanhCong
* @Date:   2015-04-10 09:38:45
* @Last Modified by:   ThanhCong
* @Last Modified time: 2015-04-10 09:39:05
*/

'use strict';

/* global define */

define(['app'], function(app){
	var directive = function(){
		return {
			templateUrl: 'scripts/view/popup/transaction-detail.html',
			restrict: 'E',
			replace: true
		};
	};

	app.directive('transactionDetail', directive);

	return directive;
});