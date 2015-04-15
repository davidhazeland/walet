/* 
 * @Author: ThanhCong
 * @Date:   2015-04-08 16:35:18
 * @Last Modified by:   ThanhCong
 * @Last Modified time: 2015-04-15 13:16:24
 */

'use strict';

/* global define */

define(['app', 'commandBus', 'observer'], function(app, CommandBus, Observer) {
	var Controller = function($scope, $element) {
		$scope.handleSearchBoxKeyUp = function(e) {
			if (e.keyCode == 13) {
				var term = $element.find('input').val();
				CommandBus.execute('SearchTransaction', {
					term: term
				});
			}
		}
	};

	app.controller('SearchTransactionCtrl', ['$scope', '$element', Controller]);

	return Controller;
});