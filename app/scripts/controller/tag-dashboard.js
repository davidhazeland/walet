/* 
 * @Author: ThanhCong
 * @Date:   2015-04-09 10:53:02
 * @Last Modified by:   ThanhCong
 * @Last Modified time: 2015-04-15 13:15:49
 */

'use strict';

/* global define */

define(['app', 'commandBus', 'observer'], function(app, CommandBus, Observer) {
	var Controller = function($scope) {
		var handleTagDashboardDrew = function() {

			},
			handleDashboardLoaded = function() {
				$scope.data = data.tag;
			};
		Observer.subscribe('TagDashboardDrew', handleTagDashboardDrew);
		Observer.subscribe('DashboardLoaded', handleDashboardLoaded);

		$scope.$on('$destroy', function() {
			Observer.unsubscribe('TagDashboardDrew', handleTagDashboardDrew);
			Observer.unsubscribe('DashboardLoaded', handleDashboardLoaded);
		});
	};

	Controller.prototype = {
		load: function() {
			CommandBus.execute('ViewTagDashboard', {});
		},

		render: function(data) {

		}
	};

	app.controller('TagDashboardCtrl', ['$scope', Controller]);

	return Controller;
});