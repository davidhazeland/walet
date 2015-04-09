/* 
* @Author: ThanhCong
* @Date:   2015-04-09 10:53:12
* @Last Modified by:   ThanhCong
* @Last Modified time: 2015-04-09 20:12:03
*/

'use strict';

/* global define */

define(['observer', 'service/dashboard', 'service/chart'], function(Observer, Dashboard, Chart){
	var handler = function(){

	}

	handler.prototype = {
		handle : function(data){
			Dashboard.getTagData(this.getTagDataCallback);
		},

		getTagDataCallback: function(data){
			Chart.drawTagChart(data);
			Observer.publish('TagDashboardDrew', {});
		}
	};

	return new handler();
});