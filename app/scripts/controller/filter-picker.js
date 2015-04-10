/* 
* @Author: ThanhCong
* @Date:   2015-04-08 21:11:01
* @Last Modified by:   ThanhCong
* @Last Modified time: 2015-04-10 20:22:39
*/

'use strict';

/* global define */

define(['app', 'commandBus', 'observer'], function(app, CommandBus, Observer) {
	var Controller = function($scope) {
		Observer.subscribe('LoadTransactions', function(data) {
			this.collapse();
		}, this);
		Observer.subscribe('OpenFilterPicker', function(data) {
			$scope.visibility = true;
		});

		$scope.visibility = false;
		$scope.handleCloseBtnClick = function(){
			$scope.visibility = false;
		};
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