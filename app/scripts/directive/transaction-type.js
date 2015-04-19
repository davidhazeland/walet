/* 
* @Author: ThanhCong
* @Date:   2015-04-10 09:37:40
* @Last Modified by:   ThanhCong
* @Last Modified time: 2015-04-10 20:18:56
*/

'use strict';

/* global define */

define(['app'], function(app){
	var directive = function(){
		return {
			templateUrl: 'scripts/view/transaction-type.html',
			restrict: 'E'
		};
	};

	app.directive('transactionType', directive);

	return directive;
});