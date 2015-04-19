/* 
* @Author: ThanhCong
* @Date:   2015-04-10 13:43:46
* @Last Modified by:   ThanhCong
* @Last Modified time: 2015-04-10 20:19:20
*/

'use strict';

/* global define */

define(['app'], function(app){
	var directive = function(){
		return {
			templateUrl: 'scripts/view/filter-picker.html',
			restrict: 'E'
		};
	};

	app.directive('filterPicker', directive);

	return directive;
});