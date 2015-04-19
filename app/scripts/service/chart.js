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
        this.monthNames = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December'
        ];
    };

    Service.prototype = {
        drawTagChart: function(canvas, data) {
            var ctx = canvas.getContext('2d');

            var expenseChart = new Chart(ctx).Doughnut(this.buildTagData(data), {
                animation: false
            });

            var legend = expenseChart.generateLegend();

            return legend;
        },

        drawCompareChart: function(canvas, data) {
            var ctx = canvas.getContext('2d');

            var compareChart = new Chart(ctx).Line(this.buildCompareData(data), {
                animation: false,
                bezierCurve: false,
                pointDot: false
            });

            var legend = compareChart.generateLegend();

            return legend;
        },

        buildTagData: function(data) {
            var result = [];
            for (var tag in data) {
            	var item = {};
            	item.label = tag;
            	item.value = data[tag];
            	item.color = this.getRandomColor();
            	result.push(item);
            }
            return result;
        },

        buildCompareData: function(data) {
            var template = {
                "labels": [],
                "datasets": [{
                    "label": "Income",
                    "fillColor": "rgba(160,212,104,0.2)",
                    "strokeColor": "rgba(160,212,104,1)",
                    "pointColor": "rgba(160,212,104,1)",
                    "pointStrokeColor": "#fff",
                    "pointHighlightFill": "#fff",
                    "pointHighlightStroke": "rgba(160,212,104,1)",
                    "data": []
                }, {
                    "label": "Expense",
                    "fillColor": "rgba(237, 85 , 101, 0.2)",
                    "strokeColor": "rgba(237, 85 , 101, 0.8)",
                    "pointColor": "rgba(237, 85 , 101, 1)",
                    "pointStrokeColor": "#fff",
                    "pointHighlightFill": "#fff",
                    "pointHighlightStroke": "rgba(237, 85 , 101, 1)",
                    "data": []
                }]
            };
            for (var month in data) {
                template.labels.push(this.monthNames[month]);
                if (typeof data[month].income === 'undefined') data[month].income = 0;
                if (typeof data[month].expense === 'undefined') data[month].expense = 0;
                template.datasets[0].data.push(data[month].income);
                template.datasets[1].data.push(data[month].expense);
            }
            template.labels[0] = '';
            return template;
        },

        getRandomColor() {
            var letters = '0123456789ABCDEF'.split('');
            var color = '#';
            for (var i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }
    };

    return new Service();
});