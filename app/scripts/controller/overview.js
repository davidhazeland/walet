/* 
* @Author: ThanhCong
* @Date:   2015-04-10 10:31:47
* @Last Modified by:   ThanhCong
* @Last Modified time: 2015-04-12 00:06:11
*/

'use strict';

/* global define */

define(['app', 'observer'], function(app, Observer){
	var Controller = function($scope) {
		Observer.subscribe('DashboardLoaded', function(data){
			$scope.overview = data.overview;
			$scope.$apply();
		}, this);
	};

	Controller.prototype = {
		render: function(){

		}
	}

	app.controller('OverviewCtrl', ['$scope', Controller]);

	return app;
});