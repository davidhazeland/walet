/* 
 * @Author: ThanhCong
 * @Date:   2015-04-10 10:31:47
 * @Last Modified by:   ThanhCong
 * @Last Modified time: 2015-04-15 13:17:43
 */

'use strict';

/* global define */

define(['app', 'observer'], function(app, Observer) {
	var Controller = function($scope) {
		var handleDashboardLoaded = function(data) {
			$scope.overview = data.overview;
			$scope.$apply();
		};

		Observer.subscribe('DashboardLoaded', handleDashboardLoaded);

		$scope.$on('$destroy', function() {
			Observer.unsubscribe('DashboardLoaded', handleDashboardLoaded);
		});
	};

	app.controller('OverviewCtrl', ['$scope', Controller]);

	return app;
});