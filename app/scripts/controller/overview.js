/* 
* @Author: ThanhCong
* @Date:   2015-04-10 10:31:47
* @Last Modified by:   ThanhCong
* @Last Modified time: 2015-04-11 20:18:52
*/

'use strict';

/* global define */

define(['app'], function(app){
	var Controller = function($scope,  $element) {
		this._element = $element;
	};

	Controller.prototype = {
		render: function(){

		}
	}

	app.controller('OverviewCtrl', ['$scope', '$element', Controller]);

	return app;
});