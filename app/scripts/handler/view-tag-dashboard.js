/* 
* @Author: ThanhCong
* @Date:   2015-04-09 10:53:12
* @Last Modified by:   ThanhCong
* @Last Modified time: 2015-04-10 11:16:29
*/

'use strict';

/* global define */

define(['observer', 'service/dashboard', 'service/chart'], function(Observer, Dashboard, Chart){
	var handler = function(){

	}

	handler.prototype = {
		handle : function(data){
			Dashboard.getTagData(function(response) {
				var legend = Chart.drawTagChart(response, data.canvas);
				Observer.publish('TagDashboardDrew', {
					legend: legend
				});
			});
		},

		getTagDataCallback: function(data){
			
		}
	};

	return new handler();
});