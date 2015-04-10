/* 
* @Author: ThanhCong
* @Date:   2015-04-08 16:35:18
* @Last Modified by:   ThanhCong
* @Last Modified time: 2015-04-08 16:39:22
*/

'use strict';

/* global define */

define(['app', 'commandBus', 'observer'], function(app, CommandBus, Observer) {
	var Controller = function($scope) {
		$scope.handleSearchBoxSubmit = this.handleSearchBoxSubmit;
	};

	Controller.prototype = {
		render : function(data){
			
		},

		handleSearchBoxSubmit : function(){
			CommandBus.execute('SearchTransaction', {});
		}
	};

	app.controller('SearchTransactionCtrl',['$scope', Controller]);

	return Controller;
});