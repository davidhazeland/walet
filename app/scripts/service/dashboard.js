/* 
* @Author: ThanhCong
* @Date:   2015-04-09 10:53:17
* @Last Modified by:   ThanhCong
* @Last Modified time: 2015-04-10 11:24:34
*/

'use strict';

/* global define */

define(['./transaction-RESTful'], function(TransactionRESTful) {
	var Service = function() {

	};

	Service.prototype = {
		getTagData: function(callback) {
			TransactionRESTful
				.get({
					type: 'tagDashboard'
				})
				.success(callback);
		},

		getCompareData: function(callback) {
			TransactionRESTful
				.get({
					type: 'compareDashboard'
				})
				.success(callback);
		}
	};

	return new Service();
});