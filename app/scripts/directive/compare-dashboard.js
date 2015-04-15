/* 
 * @Author: ThanhCong
 * @Date:   2015-04-10 10:04:37
 * @Last Modified by:   ThanhCong
 * @Last Modified time: 2015-04-15 13:24:37
 */

'use strict';

/* global define */

define(['app', 'commandBus', 'observer', 'service/chart'], function(app, CommandBus, Observer, Chart) {
	var directive = function() {
		var linkFn = function(scope, el) {
			var canvas = el.find('canvas')[0];

			var handleDashboardLoaded = function(data) {
				Chart.drawCompareChart(canvas, data.compare);
			};

			Observer.subscribe('DashboardLoaded', handleDashboardLoaded, this);
			
			scope.$on('$destroy', function() {
				Observer.unsubscribe('DashboardLoaded', handleDashboardLoaded, this);
			});
		};

		return {
			templateUrl: 'scripts/view/compare-dashboard.html',
			restrict: 'E',
			replace: true,
			link: linkFn
		};
	};

	app.directive('compareDashboard', directive);

	return directive;
});