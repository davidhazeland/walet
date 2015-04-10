/* 
* @Author: ThanhCong
* @Date:   2015-04-10 10:31:19
* @Last Modified by:   ThanhCong
* @Last Modified time: 2015-04-10 10:39:22
*/

'use strict';

/* global define */

define(['app'], function(app){
	var controller = ['$scope', '$routeParams', function($scope, $routeParams) {
		console.log($routeParams);
	}];

	app.controller('TransactionsCtrl', controller);

	return app;
});