/* 
* @Author: ThanhCong
* @Date:   2015-04-10 10:03:26
* @Last Modified by:   ThanhCong
* @Last Modified time: 2015-04-10 20:19:02
*/

'use strict';

/* global define */

define(['app'], function(app){
	var directive = function(){
		return {
			templateUrl: 'scripts/view/transaction-list.html',
			restrict: 'E'
		};
	};

	app.directive('transactionList', directive);

	return directive;
});