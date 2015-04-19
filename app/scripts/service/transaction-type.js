/* 
* @Author: ThanhCong
* @Date:   2015-04-08 16:01:05
* @Last Modified by:   ThanhCong
* @Last Modified time: 2015-04-08 16:04:17
*/

'use strict';

/* global define */

define([], function() {
	var Service = function() {

	};

	Service.prototype = {
		decorate: function(query) {
			var decorated = query;
			decorated.type = this._type;
			return decorated;
		},

		update: function(type) {
			this._type = type
		}
	};

	return new Service();
});