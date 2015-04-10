/* 
* @Author: ThanhCong
* @Date:   2015-04-10 09:39:11
* @Last Modified by:   ThanhCong
* @Last Modified time: 2015-04-10 20:19:05
*/

'use strict';

/* global define */

define(['app'], function(app){
	var directive = function(){
		return {
			templateUrl: 'scripts/view/transaction-editor.html',
			restrict: 'E'
		};
	};

	app.directive('transactionEditor', directive);

	return directive;
});