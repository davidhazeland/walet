/* 
* @Author: ThanhCong
* @Date:   2015-04-10 10:31:47
* @Last Modified by:   ThanhCong
* @Last Modified time: 2015-04-12 00:05:47
*/

'use strict';

/* global define */

define(['app', 'commandBus'], function(app, CommandBus){
	var Controller = function($scope) {
		this.load();
	};

	Controller.prototype = {
		load: function(){
			CommandBus.execute('ViewDashboard', {});
		}
	};

	app.controller('DashboardCtrl', ['$scope', Controller]);

	return app;
});