/* 
 * @Author: ThanhCong
 * @Date:   2015-04-09 10:53:17
 * @Last Modified by:   ThanhCong
 * @Last Modified time: 2015-04-11 23:57:03
 */

'use strict';

/* global define */

define([
	'./dashboard-RESTful',
	'./transaction-filter'
	], function(
		DashboardRESTful,
		TransactionFilter
		) {
	var Service = function() {

	};

	Service.prototype = {
		fetch: function(callback){
			var query = {};
			query = TransactionFilter.decorate(query);
			
			DashboardRESTful
				.get(query)
				.success(callback);
		}
	};

	return new Service();
});