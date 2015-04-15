/* 
 * @Author: ThanhCong
 * @Date:   2015-04-10 10:31:47
 * @Last Modified by:   ThanhCong
 * @Last Modified time: 2015-04-15 13:19:03
 */

'use strict';

/* global define */

define(['app', 'observer'], function(app, Observer) {
	var controller = ['$scope', function($scope) {
		var handleNavigate = function(param) {
			$scope.navDashboard = '';
			$scope.navExpense = '';
			$scope.navIncome = '';
			var actived = 'navigation__item--current';
			switch (param.page) {
				case 'dashboard':
					{
						$scope.navDashboard = actived;
						break;
					}
				case 'expense':
					{
						$scope.navExpense = actived;
						break;
					}
				case 'income':
					{
						$scope.navIncome = actived;
						break;
					}
				default:
					{
						$scope.navDashboard = actived;
					}
			}
		};

		Observer.subscribe('Navigate', handleNavigate);

		$scope.$on('$destroy', function() {
			Observer.unsubscribe('Navigate', handleNavigate);
		});
	}];

	app.controller('MenuCtrl', controller);

	return app;
});