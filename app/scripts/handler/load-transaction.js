/* 
 * @Author: ThanhCong
 * @Date:   2015-04-15 10:26:01
 * @Last Modified by:   ThanhCong
 * @Last Modified time: 2015-04-15 10:43:45
 */

'use strict';

/* global define */

define(['observer', 'service/transactions'], function(Observer, Transactions) {
	var handler = function() {

	}

	handler.prototype = {
		handle: function(data) {
			var query = {
				start: data.length,
				end: data.length + 10
			};
			Transactions.load(query, function(response) {
				Observer.publish('TransactionsLoaded', response.data);
			});
		}
	};

	return new handler();
});