/* 
* @Author: ThanhCong
* @Date:   2015-04-10 10:31:19
* @Last Modified by:   ThanhCong
* @Last Modified time: 2015-04-11 20:52:49
*/

'use strict';

/* global define */

define(['app', 'commandBus', 'observer'], function(app, CommandBus, Observer){
	var Controller = function($scope, $routeParams) {
		Observer.subscribe('LoadTransactions', function(data) {
			this.load();
		}, this);

		this.load();
	};

	Controller.prototype = {
		load: function(){
			CommandBus.execute('FetchTransaction', {});
		}
	}

	app.controller('TransactionsCtrl', ['$scope', '$routeParams', Controller]);

	return app;
});