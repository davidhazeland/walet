/* 
* @Author: ThanhCong
* @Date:   2015-04-08 16:01:43
* @Last Modified by:   ThanhCong
* @Last Modified time: 2015-04-11 11:55:38
*/

'use strict';

/* global define */

define([], function() {
	var Service = function() {
		this._term = '';
	};

	Service.prototype = {
		decorate: function(query) {
			var decorated = query;
			decorated.term = this._term;
			return decorated;
		},

		update: function(term) {
			this._term = term || '';
		}
	};

	return new Service();
});