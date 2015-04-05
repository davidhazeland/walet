/* 
* @Author: ThanhCong
* @Date:   2015-04-04 17:33:45
* @Last Modified by:   ThanhCong
* @Last Modified time: 2015-04-04 23:06:27
*/

'use strict';

/* global define */

define(['app'], function(app){
	var controller = ['$scope', function($scope) {
		$scope.handleItemClick = function () {
			console.log('ok');
		};
	}];

	app.controller('TransactionListCtrl', controller);

	return controller;
});