/* 
* @Author: ThanhCong
* @Date:   2015-04-11 23:45:59
* @Last Modified by:   ThanhCong
* @Last Modified time: 2015-04-11 23:48:36
*/

'use strict';

/* global define */

define(['observer', 'service/dashboard', 'model/dashboard'], function(Observer, Dashboard, DashboardModel){
	var handler = function(){

	}

	handler.prototype = {
		handle : function(data){
			Dashboard.fetch(function(response) {
				DashboardModel.load(response);
				Observer.publish('DashboardLoaded', response);
			});
		}
	};

	return new handler();
});