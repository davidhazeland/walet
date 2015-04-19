/* 
* @Author: ThanhCong
* @Date:   2015-04-08 16:01:17
* @Last Modified by:   ThanhCong
* @Last Modified time: 2015-04-11 11:57:02
*/

'use strict';

/* global define */

define([], function() {
	var Service = function() {
		this._filter = 'thismonth';
		this._name = 'This Month';
	};

	Service.prototype = {
		decorate: function(query) {
			var decorated = query;
			decorated.date = this._filter;
			return decorated;
		},

		update: function(data) {
			this._filter = data.filter || '';
			this._name = data.name || '';
		}
	};

	return new Service();
});