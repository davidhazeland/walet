/* 
* @Author: ThanhCong
* @Date:   2015-04-10 10:31:47
* @Last Modified by:   ThanhCong
* @Last Modified time: 2015-04-10 16:20:31
*/

'use strict';

/* global define */

define(['app'], function(app){
	var controller = ['$scope', function($scope) {
		$scope.visibility = false;
	}];

	app.controller('TransactionTypeCtrl', controller);

	return app;
});