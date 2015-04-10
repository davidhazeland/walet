/* 
* @Author: ThanhCong
* @Date:   2015-04-10 16:07:20
* @Last Modified by:   ThanhCong
* @Last Modified time: 2015-04-10 16:53:23
*/

'use strict';

/* global define */

define(['app', 'observer'], function(app, Observer){
	var controller = ['$scope', function($scope) {
		$scope.handleFilterClick = function(){
			Observer.publish('OpenFilterPicker');
		}
	}];

	app.controller('DateFilterCtrl', controller);

	return app;
});