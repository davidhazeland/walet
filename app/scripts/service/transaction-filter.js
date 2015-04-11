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
		this._filter = '';
	};

	Service.prototype = {
		decorate: function(query) {
			var decorated = query;
			decorated.filter = this._filter;
			return decorated;
		},

		update: function(filter) {
			this._filter = filter || '';
		}
	};

	return new Service();
});