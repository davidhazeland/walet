/* 
 * @Author: ThanhCong
 * @Date:   2015-04-10 10:31:19
 * @Last Modified by:   ThanhCong
 * @Last Modified time: 2015-04-15 13:12:34
 */

'use strict';

/* global define */

define(['app', 'commandBus', 'observer'], function(app, CommandBus, Observer) {
	var Controller = function($scope, $routeParams) {
		var handleLoadTransactions = function(data) {
			CommandBus.execute('FetchTransaction', {});
		};

		Observer.subscribe('LoadTransactions', handleLoadTransactions);

		$scope.$on('$destroy', function() {
			Observer.unsubscribe('LoadTransactions', handleLoadTransactions);
		});

		Observer.publish('Navigate', {
			page: $routeParams.type
		});

		CommandBus.execute('FetchTransaction', {});
	};

	Controller.prototype = {
		
	}

	app.controller('TransactionsCtrl', ['$scope', '$routeParams', Controller]);

	return app;
});