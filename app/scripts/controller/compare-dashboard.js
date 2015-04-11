/* 
* @Author: ThanhCong
* @Date:   2015-04-09 11:04:39
* @Last Modified by:   ThanhCong
* @Last Modified time: 2015-04-11 23:50:33
*/

'use strict';

/* global define */

define(['app', 'commandBus', 'observer'], function(app, CommandBus, Observer) {
	var Controller = function($scope) {
		Observer.subscribe('CompareDashboardDrew', function(){
			this.render();
		}, this);
		Observer.subscribe('DashboardLoaded', function(data){
			$scope.data = data.compare;
		}, this);
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