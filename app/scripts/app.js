/* 
* @Author: ThanhCong
* @Date:   2015-03-29 23:41:01
* @Last Modified by:   ThanhCong
* @Last Modified time: 2015-04-10 10:36:11
*/
'use strict';

/* global define */

define(['angular', 'angularRoute'], function(angular){
	var app = angular.module('portfolio', ['ngRoute']);

	app.config(['$routeProvider', function($routeProvider){
		$routeProvider
			.when('/transactions/:type', {
				templateUrl: 'scripts/view/transactions.html',
				controller: 'TransactionsCtrl'
			})
			.when('/dashboard', {
				templateUrl: 'scripts/view/dashboard.html',
				controller: 'DashboardCtrl'
			})
			.otherwise({
				redirectTo: '/dashboard'
			});
	}]);

	return app;
});