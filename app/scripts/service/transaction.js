/* 
* @Author: ThanhCong
* @Date:   2015-04-08 13:42:08
* @Last Modified by:   ThanhCong
* @Last Modified time: 2015-04-09 16:55:23
*/

'use strict';

/* global define */

define(['./transaction-RESTful'], function(TransactionRESTful) {
	var Service = function() {

	};

	Service.prototype = {
		add: function(data, callback) {
			callback();
		},

		save: function(data, callback) {
			callback();
		},

		remove: function(data, callback) {
			callback(data);
		}
	};

	return new Service();
});