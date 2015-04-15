/* 
 * @Author: ThanhCong
 * @Date:   2015-04-06 10:29:41
 * @Last Modified by:   ThanhCong
 * @Last Modified time: 2015-04-15 10:31:23
 */

'use strict';

/* global define */

define([
	'./transaction-RESTful',
	'./transaction-type',
	'./transaction-filter',
	'./transaction-search'
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
			
			TransactionRESTful
				.get(query)
				.success(callback);
		},

		load: function(callback) {
			var query = {};
			query = TransactionType.decorate(query);
			query = TransactionFilter.decorate(query);
			query = TransactionSearch.decorate(query);
			
			TransactionRESTful
				.get(query)
				.success(callback);
		},

		getById: function(id) {
			var transaction = TransactionRESTful.get(id);
			return transaction;
		}
	};

	return new Service();
});