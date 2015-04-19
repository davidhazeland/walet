/* 
* @Author: ThanhCong
* @Date:   2015-04-10 10:31:47
* @Last Modified by:   ThanhCong
* @Last Modified time: 2015-04-15 13:14:06
*/

'use strict';

/* global define */

define(['app'], function(app){
	var controller = function($scope) {
		$scope.visibility = false;
	};

	app.controller('TransactionTypeCtrl', ['$scope', controller]);

	return app;
});