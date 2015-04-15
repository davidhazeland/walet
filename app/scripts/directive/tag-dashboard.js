/* 
* @Author: ThanhCong
* @Date:   2015-04-10 10:04:15
* @Last Modified by:   ThanhCong
* @Last Modified time: 2015-04-15 13:24:32
*/

'use strict';

/* global define */

define(['app', 'commandBus', 'observer', 'service/chart'], function(app, CommandBus, Observer, Chart){
	var directive = function(){
		var linkFn = function(scope, el) {
			var canvas = el.find('canvas')[0];

			var handleDashboardLoaded = function(data){
				var legend = Chart.drawTagChart(canvas, data.tag);
				el.append(legend);
			};

			Observer.subscribe('DashboardLoaded', handleDashboardLoaded , this);
			
			scope.$on('$destroy', function(){
				Observer.unsubscribe('DashboardLoaded', handleDashboardLoaded , this);
			});
		};

		return {
			templateUrl: 'scripts/view/tag-dashboard.html',
			restrict: 'E',
			replace: true,
			link: linkFn
		};
	};

	app.directive('tagDashboard', directive);

	return directive;
});