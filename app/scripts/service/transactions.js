/* 
 * @Author: ThanhCong
 * @Date:   2015-04-06 10:29:41
 * @Last Modified by:   ThanhCong
 * @Last Modified time: 2015-04-08 16:06:08
 */

'use strict';

/* global define */

define([
	'service/transaction-RESTful',
	'service/transaction-type',
	'service/transaction-filter',
	'service/transaction-search'
	], function(
		TransactionRESTful,
		TransactionType,
		TransactionFilter,
		TransactionSearch
		) {
	var Service = function() {

	};

	Service.prototype = {
		fetch: function(callback){
			var query = {};
			query = TransactionType.decorate(query);
			query = TransactionFilter.decorate(query);
			query = TransactionSearch.decorate(query);

			TransactionRESTful.get(query, callback);
		},

		getById: function(id) {
			var transaction = TransactionRESTful.get(id);
			return transaction;
		}
	};

	return new Service();
});