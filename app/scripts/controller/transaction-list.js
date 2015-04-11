/* 
* @Author: ThanhCong
* @Date:   2015-04-04 17:33:45
* @Last Modified by:   ThanhCong
* @Last Modified time: 2015-04-11 21:04:42
*/

'use strict';

/* global define */

define(['app', 'commandBus', 'observer'], function(app, CommandBus, Observer){
	var Controller = function($scope) {
		$scope.handleItemClick = this.handleItemClick;
		
		Observer.subscribe('TransactionsLoaded', function(data) {
			$scope.data = data;
			$scope.$apply();
		}, this);
		Observer.subscribe('TransactionSaved', function(data) {
			this.refresh(data);
		}, this);
		Observer.subscribe('TransactionDeleted', function(data) {
			this.refresh(data);
		}, this);
	};

	Controller.prototype = {
		load : function (){
			
		},

		render : function(data) {

		},

		refresh : function() {

		},

		handleItemClick: function (item) {
			Observer.publish('RenderTransactionDetail', item);
		}
	};

	app.controller('TransactionListCtrl',['$scope', Controller]);

	return Controller;
});