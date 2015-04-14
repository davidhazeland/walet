/* 
 * @Author: ThanhCong
 * @Date:   2015-04-04 17:33:45
 * @Last Modified by:   ThanhCong
 * @Last Modified time: 2015-04-14 17:39:25
 */

'use strict';

/* global define */

define(['app', 'commandBus', 'observer'], function(app, CommandBus, Observer) {
	var Controller = function($scope) {
		// Observer register

		var handleTransactionLoaded = function(data) {
				for (var i = 0; i < data.items.length; i++) {
					data.items[i].date = new Date(data.items[i].date);
				};
				$scope.data = data;
			},

			handleTransactionSaved = function(data) {

			},

			handleTransactionDeleted = function(data) {

			};

		Observer.subscribe('TransactionsLoaded', handleTransactionLoaded, this);
		Observer.subscribe('TransactionSaved', handleTransactionLoaded, this);
		Observer.subscribe('TransactionDeleted', handleTransactionLoaded, this);

		// Destroy observer
		$scope.$on('$destroy', function() {
			Observer.unsubscribe('TransactionsLoaded', handleTransactionLoaded, this);
			Observer.unsubscribe('TransactionSaved', handleTransactionLoaded, this);
			Observer.unsubscribe('TransactionDeleted', handleTransactionLoaded, this);
		});

		// Scope handler
		$scope.handleItemClick = function(item) {
			var data = item;
			Observer.publish('RenderTransactionDetail', data);
		};
	};

	app.controller('TransactionListCtrl', ['$scope', Controller]);

	return Controller;
});