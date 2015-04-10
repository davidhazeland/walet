/* 
* @Author: ThanhCong
* @Date:   2015-04-10 10:04:37
* @Last Modified by:   ThanhCong
* @Last Modified time: 2015-04-10 11:26:25
*/

'use strict';

/* global define */

define(['app', 'commandBus', 'observer'], function(app, CommandBus, Observer){
	var directive = function(){
		var linkFn = function(scope, el) {
			Observer.subscribe('CompareDashboardDrew', function(data){
				
			}, this);
			
			var canvas = el.find('canvas')[0];
			CommandBus.execute('ViewCompareDashboard', {
				canvas: canvas
			});
		};

		return {
			templateUrl: 'scripts/view/compare-dashboard.html',
			restrict: 'E',
			replace: true,
			link: linkFn
		};
	};

	app.directive('compareDashboard', directive);

	return directive;
});