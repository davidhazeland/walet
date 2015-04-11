/* 
 * @Author: ThanhCong
 * @Date:   2015-04-10 10:31:47
 * @Last Modified by:   ThanhCong
 * @Last Modified time: 2015-04-11 20:54:58
 */

'use strict';

/* global define */

define(['app', 'observer'], function(app, Observer) {
	var Controller = function($scope) {
		this._scope = $scope;
		Observer.subscribe('TransactionsLoaded', function(data) {
			$scope.data = data;
			$scope.$apply();
		}, this);
	};

	Controller.prototype = {
		render : function(data) {
			
		}
	};

	app.controller('TotalCtrl', ['$scope', Controller]);

	return app;
});