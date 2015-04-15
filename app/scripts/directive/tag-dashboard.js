/* 
* @Author: ThanhCong
* @Date:   2015-04-10 10:04:15
* @Last Modified by:   ThanhCong
* @Last Modified time: 2015-04-15 16:20:38
*/

'use strict';

/* global define */

define(['app', 'commandBus', 'observer', 'service/chart'], function(app, CommandBus, Observer, Chart){
	var directive = function(){
		var linkFn = function(scope, el) {
			var canvas = el.find('canvas')[0];

			var handleDashboardLoaded = function(data){
				scope.data = data.tag;
				var legend = Chart.drawTagChart(canvas, scope.data['expense']);
				el.append(legend);
			},
			handleTransactionTypeChanged = function (data) {
				var legend = Chart.drawTagChart(canvas, scope.data[data.type]);
			};

			Observer.subscribe('DashboardLoaded', handleDashboardLoaded);
			Observer.subscribe('TransactionTypeChanged', handleTransactionTypeChanged);
			
			scope.$on('$destroy', function(){
				Observer.unsubscribe('DashboardLoaded', handleDashboardLoaded);
				Observer.unsubscribe('TransactionTypeChanged', handleTransactionTypeChanged);
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