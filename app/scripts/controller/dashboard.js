/* 
* @Author: ThanhCong
* @Date:   2015-04-10 10:31:47
* @Last Modified by:   ThanhCong
* @Last Modified time: 2015-04-13 10:07:35
*/

'use strict';

/* global define */

define(['app', 'commandBus', 'observer'], function(app, CommandBus, Observer){
	var Controller = function($scope, $routeParams) {
		this.load();
		Observer.publish('Navigate', {
			page: 'dashboard'
		});
	};

	Controller.prototype = {
		load: function(){
			CommandBus.execute('ViewDashboard', {});
		}
	};

	app.controller('DashboardCtrl', ['$scope', '$routeParams', Controller]);

	return app;
});