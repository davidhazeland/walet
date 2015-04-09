/* 
* @Author: ThanhCong
* @Date:   2015-04-09 10:53:17
* @Last Modified by:   ThanhCong
* @Last Modified time: 2015-04-09 11:05:44
*/

'use strict';

/* global define */

define(['service/transaction-RESTful'], function(TransactionRESTful) {
	var Service = function() {

	};

	Service.prototype = {
		getTagData: function(data, callback) {
			callback();
		},

		getCompareData: function(data, callback) {
			callback();
		}
	};

	return new Service();
});