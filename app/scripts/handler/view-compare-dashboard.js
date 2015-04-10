/* 
* @Author: ThanhCong
* @Date:   2015-04-09 10:56:32
* @Last Modified by:   ThanhCong
* @Last Modified time: 2015-04-10 11:30:21
*/

'use strict';

/* global define */

define(['observer', 'service/dashboard', 'service/chart'], function(Observer, Dashboard, Chart){
	var handler = function(){

	}

	handler.prototype = {
		handle : function(data){
			Dashboard.getCompareData(function(response) {
				var legend = Chart.drawCompareChart(response, data.canvas);
				Observer.publish('CompareDashboardDrew', {
					legend: legend
				});
			});
		},

		getCompareDataCallback: function(){
			Chart.drawCompareChart();
			Observer.publish('CompareDashboardDrew', {});
		}
	};

	return new handler();
});