/* 
* @Author: ThanhCong
* @Date:   2015-04-06 13:48:39
* @Last Modified by:   ThanhCong
* @Last Modified time: 2015-04-08 13:08:57
*/

'use strict';

/* global define */

define(['app', 'commandBus', 'observer'], function(app, CommandBus, Observer) {
	var Controller = function($scope) {
		Observer.subscribe('RenderTransactionDetail', function(data){
			this.render(data);
		}, this);

		$scope.handleEditBtnClick = this.handleEditBtnClick;
	};

	Controller.prototype = {
		render : function(data){
			
		},

		handleEditBtnClick : function(){
			CommandBus.execute('EditTransaction', {});
		}
	};

	app.controller('TransactionDetailCtrl',['$scope', Controller]);

	return Controller;
});