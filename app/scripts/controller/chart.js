'use strict';

/* global define */

define(['app', 'chartjs', 'jquery'], function(app, Chart, $) {
	var Chartjs = Chart.noConflict();

	function drawExpenseChart() {
		var expense = document.getElementById('expense'),
			ctx = expense.getContext('2d');
		var data = [{
			value: 300,
			color: "#F7464A",
			highlight: "#FF5A5E",
			label: "Red"
		}, {
			value: 50,
			color: "#46BFBD",
			highlight: "#5AD3D1",
			label: "Green"
		}, {
			value: 100,
			color: "#FDB45C",
			highlight: "#FFC870",
			label: "Yellow"
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
				label: "My First dataset",
				fillColor: "rgba(220,220,220,0.2)",
				strokeColor: "rgba(220,220,220,1)",
				pointColor: "rgba(220,220,220,1)",
				pointStrokeColor: "#fff",
				pointHighlightFill: "#fff",
				pointHighlightStroke: "rgba(220,220,220,1)",
				data: [65, 59, 80, 81, 56, 55, 40]
			}, {
				label: "My Second dataset",
				fillColor: "rgba(151,187,205,0.2)",
				strokeColor: "rgba(151,187,205,1)",
				pointColor: "rgba(151,187,205,1)",
				pointStrokeColor: "#fff",
				pointHighlightFill: "#fff",
				pointHighlightStroke: "rgba(151,187,205,1)",
				data: [28, 48, 40, 19, 86, 27, 90]
			}]
		};

		var compareChart = new Chartjs(ctx).Line(data, {
			animation: false
		});
	}

	var controller = ['$scope', function($scope) {
		drawExpenseChart();
		drawCompareChart();
	}];

	app.controller('ChartCtrl', controller);

	return app;
});