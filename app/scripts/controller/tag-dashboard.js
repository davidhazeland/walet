/* 
* @Author: ThanhCong
* @Date:   2015-04-09 10:53:02
* @Last Modified by:   ThanhCong
* @Last Modified time: 2015-04-09 11:02:36
*/

'use strict';

/* global define */

define(['app', 'commandBus', 'observer'], function(app, CommandBus, Observer) {
	var Controller = function($scope) {
		Observer.subscribe('TagDashboardDrew', function(){
			this.render();
		}, this);
	};

	Controller.prototype = {
		load : function(){
			CommandBus.execute('ViewTagDashboard', {});
		},

		render : function(data){
			
		}
	};

	app.controller('TagDashboardCtrl',['$scope', Controller]);

	return Controller;
});