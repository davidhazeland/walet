/* 
* @Author: ThanhCong
* @Date:   2015-04-04 17:33:45
* @Last Modified by:   ThanhCong
* @Last Modified time: 2015-04-10 20:24:27
*/

'use strict';

/* global define */

define(['app', 'commandBus', 'observer'], function(app, CommandBus, Observer){
	var Controller = function($scope) {
		$scope.handleItemClick = this.handleItemClick;

		Observer.subscribe('LoadTransactions', function(data) {
			this.load();
		}, this);
		Observer.subscribe('RenderTransactions', function(data) {
			this.render(data);
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
			CommandBus.execute('FetchTransaction', {});
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