/* 
* @Author: ThanhCong
* @Date:   2015-04-10 10:04:15
* @Last Modified by:   ThanhCong
* @Last Modified time: 2015-04-10 11:22:35
*/

'use strict';

/* global define */

define(['app', 'commandBus', 'observer'], function(app, CommandBus, Observer){
	var directive = function(){
		var linkFn = function(scope, el) {
			Observer.subscribe('TagDashboardDrew', function(data){
				el.append(data.legend);
			}, this);
			
			var canvas = el.find('canvas')[0];
			CommandBus.execute('ViewTagDashboard', {
				canvas: canvas
			});
		};

		return {
			templateUrl: 'scripts/view/tag-dashboard.html',
			restrict: 'E',
			replace: true,
			link: linkFn
		};
	};

	app.directive('tagDashboard', directive);

	return directive;
});