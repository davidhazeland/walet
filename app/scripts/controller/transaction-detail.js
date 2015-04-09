/* 
 * @Author: ThanhCong
 * @Date:   2015-04-06 13:48:39
 * @Last Modified by:   ThanhCong
 * @Last Modified time: 2015-04-09 10:17:12
 */

'use strict';

/* global define */

define(['app', 'commandBus', 'observer'], function(app, CommandBus, Observer) {
	var Controller = function($scope) {
		Observer.subscribe('RenderTransactionDetail', function(data) {
			this.render(data);
		}, this);
		Observer.subscribe('TransactionDeleted', function(data) {
			this.collapse();
		}, this);

		$scope.handleEditBtnClick = this.handleEditBtnClick;
		$scope.handleDeleteBtnClick = this.handleDeleteBtnClick;
	};

	Controller.prototype = {
		render: function(data) {

		},

		collapse : function () {

		},

		handleEditBtnClick: function() {
			CommandBus.execute('EditTransaction', {});
		},

		handleDeleteBtnClick: function() {
			CommandBus.execute('DeleteTransaction', {});
		}
	};

	app.controller('TransactionDetailCtrl', ['$scope', Controller]);

	return Controller;
});