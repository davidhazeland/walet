/* 
* @Author: ThanhCong
* @Date:   2015-04-06 09:45:37
* @Last Modified by:   ThanhCong
* @Last Modified time: 2015-04-15 10:30:50
*/

'use strict';

/* global define */

define([
	'handler/fetch-transaction',
	'handler/load-transaction',
	'handler/view-transaction',
	'handler/edit-transaction',
	'handler/save-transaction',
	'handler/search-transaction',
	'handler/filter-transaction',
	'handler/delete-transaction',
	'handler/view-tag-dashboard',
	'handler/view-compare-dashboard',
	'handler/view-dashboard'
	], function(
		FetchTransactionHandler,
		LoadTransactionHandler,
		ViewTransactionHandler,
		EditTransactionHandler,
		SaveTransactionHandler,
		SearchTransactionHandler,
		FilterTransactionHandler,
		DeleteTransactionHandler,
		ViewTagDashboardHandler,
		ViewCompareDashboardHandler,
		ViewDashboardHandler
		){
		var ComandBus = function(){
			this.maps = {
				'FetchTransaction': FetchTransactionHandler,
				'LoadTransaction': LoadTransactionHandler,
				'ViewTransaction': ViewTransactionHandler,
				'EditTransaction': EditTransactionHandler,
				'SaveTransaction': SaveTransactionHandler,
				'SearchTransaction': SearchTransactionHandler,
				'FilterTransaction': FilterTransactionHandler,
				'DeleteTransaction': DeleteTransactionHandler,
				'ViewTagDashboard': ViewTagDashboardHandler,
				'ViewCompareDashboard': ViewCompareDashboardHandler,
				'ViewDashboard': ViewDashboardHandler
			}
		};

		ComandBus.prototype = {
			execute: function(command, data){
				this.resolveHandler(command).handle(data);
			},

			resolveHandler : function (command) {
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