/* 
 * @Author: ThanhCong
 * @Date:   2015-04-10 10:31:47
 * @Last Modified by:   ThanhCong
 * @Last Modified time: 2015-04-15 16:24:16
 */

'use strict';

/* global define */

define(['app', 'observer'], function(app, Observer) {
	var Controller = function($scope) {
		var handleDashboardLoaded = function(data) {
			$scope.overview = data.tag.overview;
			$scope.$apply();
		};

		Observer.subscribe('DashboardLoaded', handleDashboardLoaded);

		$scope.$on('$destroy', function() {
			Observer.unsubscribe('DashboardLoaded', handleDashboardLoaded);
		});

		$scope.actived = 'overview__item--current';
		$scope.current = 'expense';
		$scope.handleTypeChange = function(type) {
			$scope.current = type;

			Observer.publish('TransactionTypeChanged', {
				type: type
			});
		};
	};

	app.controller('OverviewCtrl', ['$scope', Controller]);

	return app;
});