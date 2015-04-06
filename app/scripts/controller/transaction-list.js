/* 
* @Author: ThanhCong
* @Date:   2015-04-04 17:33:45
* @Last Modified by:   ThanhCong
* @Last Modified time: 2015-04-06 17:43:01
*/

'use strict';

/* global define */

define(['app', 'commandBus'], function(app, CommandBus){
	var Controller = function($scope) {
		$scope.handleItemClick = this.handleItemClick;
	};

	Controller.prototype = {
		handleItemClick: function () {
			CommandBus.execute('ViewTransaction', {
				id: 13
			});
		}
	};

	app.controller('TransactionListCtrl',['$scope', Controller]);

	return Controller;
});