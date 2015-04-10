/* 
* @Author: ThanhCong
* @Date:   2015-04-10 09:36:32
* @Last Modified by:   ThanhCong
* @Last Modified time: 2015-04-10 09:41:33
*/

'use strict';

/* global define */

define(['app'], function(app){
	var directive = function(){
		return {
			templateUrl: 'scripts/view/popup/date-filter-picker.html',
			restrict: 'E',
			replace: true
		};
	};

	app.directive('dateFilterPicker', directive);

	return directive;
});