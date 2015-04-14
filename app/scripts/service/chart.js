/* 
 * @Author: ThanhCong
 * @Date:   2015-04-09 10:54:01
 * @Last Modified by:   ThanhCong
 * @Last Modified time: 2015-04-13 09:31:36
 */

'use strict';

/* global define */

define(['chartjs'], function(Chart) {
	var Service = function() {

	};

	Service.prototype = {
		drawTagChart: function(canvas, data) {
			var ctx = canvas.getContext('2d');

			var expenseChart = new Chart(ctx).Doughnut(data, {
				animation: false
			});

			var legend = expenseChart.generateLegend();

			return legend;
		},

		drawCompareChart: function(canvas, data) {
			var ctx = canvas.getContext('2d');

			var compareChart = new Chart(ctx).Line(data, {
				animation: false,
				bezierCurve: false,
				pointDot: false
			});

			var legend = compareChart.generateLegend();

			return legend;
		}
	};

	return new Service();
});