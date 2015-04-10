/* 
 * @Author: ThanhCong
 * @Date:   2015-04-06 13:48:39
 * @Last Modified by:   ThanhCong
 * @Last Modified time: 2015-04-10 20:31:12
 */

 'use strict';

 /* global define */

 define(['app', 'commandBus', 'observer'], function(app, CommandBus, Observer) {
 	var Controller = function($scope) {
 		Observer.subscribe('RenderTransactionDetail', function(data) {
 			this.render(data);
 			$scope.visibility = true;
 		}, this);
 		Observer.subscribe('TransactionDeleted', function(data) {
 			this.collapse();
 		}, this);

 		$scope.visibility = false;
 		$scope.handleCloseBtnClick = function(){
 			$scope.visibility = false;
 		};
 		$scope.handleEditBtnClick = function(){
 			CommandBus.execute('EditTransaction', {});
 		};
 		$scope.handleDeleteBtnClick = function(){
 			CommandBus.execute('DeleteTransaction', {});
 		};
 	};

 	Controller.prototype = {
 		render: function(data) {

 		},

 		collapse : function () {

 		},

 		handleEditBtnClick: function() {
 			
 		},

 		handleDeleteBtnClick: function() {
 			
 		}
 	};

 	app.controller('TransactionDetailCtrl', ['$scope', Controller]);

 	return Controller;
 });