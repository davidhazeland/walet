/* 
 * @Author: ThanhCong
 * @Date:   2015-04-08 21:11:01
 * @Last Modified by:   ThanhCong
 * @Last Modified time: 2015-04-13 10:36:28
 */

'use strict';

/* global define */

define(['app', 'commandBus', 'observer'], function(app, CommandBus, Observer) {
	var Controller = function($scope) {
		Observer.subscribe('LoadTransactions', function(data) {
			$scope.visibility = false;
		}, this);
		Observer.subscribe('OpenFilterPicker', function(data) {
			$scope.visibility = true;
		});

		$scope.visibility = false;
		$scope.handleCloseBtnClick = function() {
			$scope.visibility = false;
		};
		$scope.handleSelectionClick = function(e) {
			CommandBus.execute('FilterTransaction', {});
		};
	};

	Controller.prototype = {
		render: function(data) {

		},

		collapse: function() {

		},

		handleSelectionClick: function() {

		}
	};

	app.controller('FilterPickerCtrl', ['$scope', Controller]);

	return Controller;
});