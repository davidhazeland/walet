/* 
* @Author: ThanhCong
* @Date:   2015-04-04 17:33:45
* @Last Modified by:   ThanhCong
* @Last Modified time: 2015-04-08 13:48:34
*/

'use strict';

/* global define */

define(['app', 'commandBus', 'observer'], function(app, CommandBus, Observer){
	var Controller = function($scope) {
		$scope.handleItemClick = this.handleItemClick;

		Observer.subscribe('RenderTransactions', function(data) {
			this.render(data);
		}, this);
		Observer.subscribe('TransactionSaved', function(data) {
			this.refresh(data);
		}, this);
	};

	Controller.prototype = {
		initialize : function (type){
			CommandBus.execute('FetchTransaction', {
				type: type
			});
		},

		render : function(data) {

		},

		refresh : function() {

		},

		handleItemClick: function () {
			CommandBus.execute('ViewTransaction', {
				id: 13
			});
		}
	};

	app.controller('TransactionListCtrl',['$scope', Controller]);

	return Controller;
});