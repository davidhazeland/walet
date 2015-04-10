/* 
 * @Author: ThanhCong
 * @Date:   2015-04-08 13:14:14
 * @Last Modified by:   ThanhCong
 * @Last Modified time: 2015-04-08 15:13:37
 */

'use strict';

/* global define */

define(['app', 'commandBus', 'observer'], function(app, CommandBus, Observer) {
	var Controller = function($scope) {
		Observer.subscribe('RenderTransactionEditor', function(data) {
			this.render(data);
		}, this);
		Observer.subscribe('TransactionSaved', function(data) {
			this.collapse();
		}, this);

		$scope.handleSaveBtnClick = this.handleSaveBtnClick;
	};

	Controller.prototype = {
		render: function(data) {

		},

		collapse: function() {

		},

		handleSaveBtnClick: function() {
			CommandBus.execute('EditTransaction', {});
		}
	};

	app.controller('TransactionEditorCtrl', ['$scope', Controller]);

	return Controller;
});