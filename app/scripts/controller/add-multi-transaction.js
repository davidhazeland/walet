/* 
* @Author: ThanhCong
* @Date:   2015-04-10 10:31:47
* @Last Modified by:   ThanhCong
* @Last Modified time: 2015-04-14 16:11:28
*/

'use strict';

/* global define */

define(['app', 'observer'], function(app, Observer){
	var controller = ['$scope', function($scope) {
		$scope.visibility = false;
		$scope.handleCloseBtnClick = function(){
			$scope.visibility = false;
		};

		Observer.subscribe('OpenTransactionEditor', function(){
			$scope.visibility = true;
		});
	}];

	app.controller('AddMultiTransactionCtrl', controller);

	return app;
});