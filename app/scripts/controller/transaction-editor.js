/* 
 * @Author: ThanhCong
 * @Date:   2015-04-08 13:14:14
 * @Last Modified by:   ThanhCong
 * @Last Modified time: 2015-04-15 17:05:17
 */

'use strict';

/* global define */

define(['app', 'commandBus', 'observer'], function(app, CommandBus, Observer) {
	var Controller = function($scope, $element) {
		// Observer register
		var handleOpenTransactionEditor = function(data) {
				$scope.model = data;
				$scope.visibility = true;
			},
			handleTransactionAdded = function() {
				$scope.visibility = false;
				$scope.$apply();
			},
			handleTransactionSaved = function() {
				$scope.visibility = false;
				$scope.$apply();
			};

		Observer.subscribe('OpenTransactionEditor', handleOpenTransactionEditor, this);
		Observer.subscribe('TransactionAdded', handleTransactionAdded, this);
		Observer.subscribe('TransactionSaved', handleTransactionSaved, this);

		// Destroy observer
		$scope.$on('$destroy', function() {
			Observer.unsubscribe('OpenTransactionEditor', handleOpenTransactionEditor, this);
			Observer.unsubscribe('TransactionAdded', handleTransactionAdded, this);
			Observer.unsubscribe('TransactionSaved', handleTransactionSaved, this);

		});

		// Scope property
		$scope.visibility = false;
		$scope.handleSaveBtnClick = function() {
			CommandBus.execute('SaveTransaction', $scope.model);
		};
		$scope.handleCloseBtnClick = function(){
			$scope.visibility = false;
		};
	};

	app.controller('TransactionEditorCtrl', ['$scope', '$element', Controller]);

	return Controller;
});