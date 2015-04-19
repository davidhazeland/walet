/* 
* @Author: ThanhCong
* @Date:   2015-04-09 11:04:39
* @Last Modified by:   ThanhCong
* @Last Modified time: 2015-04-15 14:37:33
*/

'use strict';

/* global define */

define(['app', 'commandBus', 'observer'], function(app, CommandBus, Observer) {
	var Controller = function($scope) {
		var handleCompareDashboardDrew = function() {

			},
			handleDashboardLoaded = function(data) {
				//$scope.data = data.compare;
			};
		Observer.subscribe('CompareDashboardDrew', handleCompareDashboardDrew);
		Observer.subscribe('DashboardLoaded', handleDashboardLoaded);

		$scope.$on('$destroy', function() {
			Observer.unsubscribe('CompareDashboardDrew', handleCompareDashboardDrew);
			Observer.unsubscribe('DashboardLoaded', handleDashboardLoaded);
		});
	};

	Controller.prototype = {
		load : function(){
			CommandBus.execute('ViewCompareDashboard', {});
		},

		render : function(data){
			
		}
	};

	app.controller('CompareDashboardCtrl',['$scope', Controller]);

	return Controller;
});