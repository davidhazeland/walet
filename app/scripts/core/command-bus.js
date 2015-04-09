/* 
* @Author: ThanhCong
* @Date:   2015-04-06 09:45:37
* @Last Modified by:   ThanhCong
* @Last Modified time: 2015-04-09 10:57:24
*/

'use strict';

/* global define */

define([
	'handler/fetch-transaction',
	'handler/view-transaction',
	'handler/edit-transaction',
	'handler/save-transaction',
	'handler/search-transaction',
	'handler/filter-transaction',
	'handler/delete-transaction',
	'handler/view-tag-dashboard',
	'handler/view-compare-dashboard'
	], function(
		FetchTransactionHandler,
		ViewTransactionHandler,
		EditTransactionHandler,
		SaveTransactionHandler,
		SearchTransactionHandler,
		FilterTransactionHandler,
		DeleteTransactionHandler,
		ViewTagDashboardHandler,
		ViewCompareDashboardHandler
		){
		var ComandBus = function(){

		};

		ComandBus.prototype = {
			maps: {
				'FetchTransaction': FetchTransactionHandler,
				'ViewTransaction': ViewTransactionHandler,
				'EditTransaction': EditTransactionHandler,
				'SaveTransaction': SaveTransactionHandler,
				'SearchTransaction': SearchTransactionHandler,
				'FilterTransaction': FilterTransactionHandler,
				'DeleteTransaction': DeleteTransactionHandler,
				'ViewTagDashboard': ViewTagDashboardHandler,
				'ViewCompareDashboard': ViewCompareDashboardHandler
			},

			execute: function(command, data){
				this.resolveHander(command).handle(data);
			},

			resolveHander : function (command) {
				var handler = this.maps[command];
				if (!handler) return this.handleError(command);
				return handler;
			},

			handleError : function(command){
				return {
					handle: function(data){
						console.log('Not found handler for ' + command + ' command');
					}
				};
			}
		};

		return new ComandBus();
	});