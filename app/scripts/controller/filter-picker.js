/* 
* @Author: ThanhCong
* @Date:   2015-04-08 21:11:01
* @Last Modified by:   ThanhCong
* @Last Modified time: 2015-04-08 21:21:41
*/

'use strict';

/* global define */

define(['app', 'commandBus', 'observer'], function(app, CommandBus, Observer) {
	var Controller = function($scope) {
		Observer.subscribe('LoadTransactions', function(data) {
			this.collapse();
		}, this);

		$scope.handleSelectionClick = this.handleSelectionClick;
	};

	Controller.prototype = {
		render: function(data) {

		},

		collapse: function() {

		},

		handleSelectionClick: function() {
			CommandBus.execute('FilterTransaction', {});
		}
	};

	app.controller('FilterPickerCtrl', ['$scope', Controller]);

	return Controller;
});