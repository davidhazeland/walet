/* 
* @Author: ThanhCong
* @Date:   2015-04-06 13:48:39
* @Last Modified by:   ThanhCong
* @Last Modified time: 2015-04-08 09:27:20
*/

'use strict';

/* global define */

define(['app', 'observer'], function(app, Observer) {
	var Controller = function($scope) {
		Observer.subscribe('RenderTransactionDetail', function(data){
			this.render(data);
		}, this);
	};

	Controller.prototype = {
		render : function(data){
			console.log(data);
		}
	};

	app.controller('TransactionDetailCtrl',['$scope', Controller]);

	return Controller;
});