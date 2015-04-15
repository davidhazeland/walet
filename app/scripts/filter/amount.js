/* 
* @Author: ThanhCong
* @Date:   2015-04-15 19:26:08
* @Last Modified by:   ThanhCong
* @Last Modified time: 2015-04-15 19:46:49
*/

'use strict';

/* global define */

define(['app'], function(app){
	var filter = function(){
		return function(input, type) {
			var signal;
			if (typeof type == 'undefined') {
				signal = input > 0 ? '+' : '-';
			} else {
				signal = type == 'income' ? '+' : '-';
			}
			return signal + ' ' + input + '$';
		}			
	};

	app.filter('amount', filter);
});