/* 
 * @Author: ThanhCong
 * @Date:   2015-04-08 21:11:01
 * @Last Modified by:   ThanhCong
 * @Last Modified time: 2015-04-15 16:48:50
 */

'use strict';

/* global define */

define(['app', 'commandBus', 'observer'], function(app, CommandBus, Observer) {
	var Controller = function($scope) {
		var handleLoadTransactions = function(data) {
				$scope.visibility = false;
			},
			handleOpenFilterPicker = function(data) {
				$scope.visibility = true;
			};
		Observer.subscribe('LoadTransactions', handleLoadTransactions);
		Observer.subscribe('OpenFilterPicker', handleOpenFilterPicker);

		$scope.$on('$destroy', function() {
			Observer.subscribe('LoadTransactions', handleLoadTransactions);
			Observer.subscribe('OpenFilterPicker', handleOpenFilterPicker);
		});

		// Scope property
		$scope.visibility = false;
		$scope.current = 'thismonth';
		$scope.actived = 'picker-selection__item--current';
		$scope.filters = [
			{
				filter: 'thisweek',
				name: 'This Week'
			},
			{
				filter: 'thismonth',
				name: 'This Month'
			},{
				filter: 'lastmonth',
				name: 'Last Month'
			},{
				filter: 'thisyear',
				name: 'This Year'
			},{
				filter: 'lastyear',
				name: 'Last Year'
			}
		]
		$scope.handleCloseBtnClick = function() {
			$scope.visibility = false;
		};
		$scope.handleSelectionClick = function(selection) {
			$scope.current = selection.filter;
			CommandBus.execute('FilterTransaction', selection);
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