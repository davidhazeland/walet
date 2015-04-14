/* 
* @Author: ThanhCong
* @Date:   2015-04-14 17:27:42
* @Last Modified by:   ThanhCong
* @Last Modified time: 2015-04-14 17:30:46
*/

'use strict';

/* global define */

define(['app'], function(app){
	var filter = function(){
		return function(input) {
			input = input || '';
			return new Date(input);
		}			
	};

	app.filter('datePicker', filter);
});