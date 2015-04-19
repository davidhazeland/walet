/* 
 * @Author: ThanhCong
 * @Date:   2015-04-06 13:48:39
 * @Last Modified by:   ThanhCong
 * @Last Modified time: 2015-04-14 17:06:01
 */

'use strict';

/* global define */

define(['app', 'commandBus', 'observer'], function(app, CommandBus, Observer) {
	var Controller = function($scope) {
		// Observer register
		var handleRenderTransactionDetail = function(item) {
				$scope.item = item;
				$scope.visibility = true;
			},
			handleTransactionDeleted = function() {
				$scope.visibility = false;
				$scope.$apply();
			};

		Observer.subscribe('RenderTransactionDetail', handleRenderTransactionDetail, this);
		Observer.subscribe('TransactionDeleted', handleTransactionDeleted, this);

		// Destroy Observer
		$scope.$on('$destroy', function() {
			Observer.unsubscribe('RenderTransactionDetail', handleRenderTransactionDetail, this);
			Observer.unsubscribe('TransactionDeleted', handleTransactionDeleted, this);
		});

		// Scope property
		$scope.visibility = false;
		$scope.handleCloseBtnClick = function() {
			$scope.visibility = false;
		};
		$scope.handleEditBtnClick = function() {
			$scope.visibility = false;
			Observer.publish('OpenTransactionEditor', $scope.item);
		};
		$scope.handleDeleteBtnClick = function() {
			CommandBus.execute('DeleteTransaction', $scope.item);
		};
	};

	app.controller('TransactionDetailCtrl', ['$scope', Controller]);

	return Controller;
});