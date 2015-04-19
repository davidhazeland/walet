/* 
 * @Author: ThanhCong
 * @Date:   2015-04-10 10:31:47
 * @Last Modified by:   ThanhCong
 * @Last Modified time: 2015-04-15 16:25:43
 */

'use strict';

/* global define */

define(['app', 'observer'], function(app, Observer) {
	var controller = ['$scope', function($scope) {

		$scope.actived = 'navigation__item--current';
		$scope.current = 'dashboard';

		var handleNavigate = function(param) {
			$scope.current = param.page;
		};

		Observer.subscribe('Navigate', handleNavigate);

		$scope.$on('$destroy', function() {
			Observer.unsubscribe('Navigate', handleNavigate);
		});
	}];

	app.controller('MenuCtrl', controller);

	return app;
});