/* 
 * @Author: ThanhCong
 * @Date:   2015-04-10 16:07:20
 * @Last Modified by:   ThanhCong
 * @Last Modified time: 2015-04-15 16:47:37
 */

'use strict';

/* global define */

define(['app', 'observer'], function(app, Observer) {
	var Controller = function($scope) {
		var handleDateFilterChanged = function(filter) {
			$scope.filter = filter;
		};

		Observer.subscribe('DateFilterChanged', handleDateFilterChanged);

		$scope.filter = 'This Month';
		$scope.$on('$destroy', function() {
			Observer.unsubscribe('DateFilterChanged', handleDateFilterChanged);
		});

		$scope.handleFilterClick = function() {
			Observer.publish('OpenFilterPicker');
		}
	};

	app.controller('DateFilterCtrl', ['$scope', Controller]);

	return app;
});