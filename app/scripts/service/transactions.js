/* 
 * @Author: ThanhCong
 * @Date:   2015-04-06 10:29:41
 * @Last Modified by:   ThanhCong
 * @Last Modified time: 2015-04-08 11:29:23
 */

'use strict';

/* global define */

define(['service/transaction-RESTful'], function(TransactionRESTful) {
	var Service = function() {

	};

	Service.prototype = {
		getById: function(id) {
			var transaction = TransactionRESTful.get(id);
			return transaction;
		},

		getIncome: function(callback) {
			callback();
		},

		getExpense: function(callback) {
			callback();
		}
	};

	return new Service();
});