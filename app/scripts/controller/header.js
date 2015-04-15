/* 
* @Author: ThanhCong
* @Date:   2015-03-30 21:35:01
* @Last Modified by:   ThanhCong
* @Last Modified time: 2015-04-15 17:06:17
*/
'use strict';

/* global define */

define(['app', 'observer', 'jquery'], function(app, Observer, $){
	var controller = ['$scope', function($scope) {
		$scope.toggleMenu = function() {
			$('#feature').toggleClass('collapsed');
		};

		$scope.handleAddBtnClick = function(){
			Observer.publish('OpenTransactionEditor', {
				date: new Date(),
				type: 'expense'
			});
		}
	}];

	app.controller('HeaderCtrl', controller);

	return app;
});