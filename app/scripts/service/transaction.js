/* 
* @Author: ThanhCong
* @Date:   2015-04-08 13:42:08
* @Last Modified by:   ThanhCong
* @Last Modified time: 2015-04-08 13:44:49
*/

'use strict';

/* global define */

define(['service/transaction-RESTful'], function(TransactionRESTful) {
	var Service = function() {

	};

	Service.prototype = {
		save: function(callback) {
			callback();
		}
	};

	return new Service();
});