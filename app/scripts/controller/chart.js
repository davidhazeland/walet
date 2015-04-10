/* 
* @Author: ThanhCong
* @Date:   2015-03-31 16:38:50
* @Last Modified by:   ThanhCong
* @Last Modified time: 2015-04-09 18:17:20
*/
'use strict';

/* global define */

define(['app', 'chartjs', 'jquery'], function(app, Chart, $) {
	var Chartjs = Chart.noConflict();

	function drawExpenseChart() {
		var expense = document.getElementById('expense'),
			ctx = expense.getContext('2d');
		var data = [
		{
			value: 200,
			color: "#FDB45C",
			highlight: "#FFC870",
			label: "Yellow"
		},{
			value: 80,
			color: "#967adc",
			highlight: "#ac92ec",
			label: "Violet"
		}, {
			value: 70,
			color: "#46BFBD",
			highlight: "#5AD3D1",
			label: "Green"
		}];

		var expenseChart = new Chartjs(ctx).Doughnut(data, {
			animation: false
		});

		var legend = expenseChart.generateLegend();

		$(expense).after(legend);
	}

	function drawCompareChart() {
		var compare = document.getElementById('compare'),
			ctx = compare.getContext('2d');
		var data = {
			labels: ["", "February", "March", "April", "May", "June", "July"],
			datasets: [{
				label: "Income",
				fillColor: "rgba(160,212,104,0.2)",
				strokeColor: "rgba(160,212,104,1)",
				pointColor: "rgba(160,212,104,1)",
				pointStrokeColor: "#fff",
				pointHighlightFill: "#fff",
				pointHighlightStroke: "rgba(160,212,104,1)",
				data: [65, 59, 80, 81, 56, 55, 40]
			}, {
				label: "Expense",
				fillColor: "rgba(237, 85 , 101, 0.2)",
				strokeColor: "rgba(237, 85 , 101, 0.8)",
				pointColor: "rgba(237, 85 , 101, 1)",
				pointStrokeColor: "#fff",
				pointHighlightFill: "#fff",
				pointHighlightStroke: "rgba(237, 85 , 101, 1)",
				data: [28, 48, 40, 19, 86, 27, 90]
			}]
		};

		var compareChart = new Chartjs(ctx).Line(data, {
			animation: false,
			bezierCurve : false,
			pointDot : false
		});
	}

	var controller = ['$scope', function($scope) {
		drawExpenseChart();
		drawCompareChart();
	}];

	app.controller('ChartCtrl', controller);

	return app;
});