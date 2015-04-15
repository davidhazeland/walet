/* 
 * @Author: ThanhCong
 * @Date:   2015-04-10 10:31:47
 * @Last Modified by:   ThanhCong
 * @Last Modified time: 2015-04-15 11:18:57
 */

'use strict';

/* global define */

define(['app', 'observer'], function(app, Observer) {
	var Controller = function($scope) {
		var handleTransactionFetched = function(data) {
			$scope.total = data.total;
			$scope.$apply();
		}

		Observer.subscribe('TransactionsFetched', handleTransactionFetched);

		$scope.$on('$destroy', function() {
			Observer.unsubscribe('TransactionsFetched', handleTransactionFetched);
		});
	};

	Controller.prototype = {
		render: function(data) {

		}
	};

	app.controller('TotalCtrl', ['$scope', Controller]);

	return app;
});