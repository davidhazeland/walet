/* 
* @Author: ThanhCong
* @Date:   2015-04-06 09:45:37
* @Last Modified by:   ThanhCong
* @Last Modified time: 2015-04-08 09:52:48
*/

'use strict';

/* global define */

define([
	'handler/fetch-transaction',
	'handler/view-transaction'
	], function(
		FetchTransactionHandler,
		ViewTransactionHandler
		){
		var ComandBus = function(){

		};

		ComandBus.prototype = {
			maps: {
				'FetchTransaction': FetchTransactionHandler,
				'ViewTransaction': ViewTransactionHandler
			},

			execute: function(command, data){
				this.resolveHander(command).handle(data);
			},

			resolveHander : function (command) {
				var handler = this.maps[command];
				if (!handler) return this.ErrorHandler(command);
				return handler;
			},

			ErrorHandler : function(command){
				return {
					handle: function(data){
						console.log('Not found handler for ' + command + ' command');
					}
				};
			}
		};

		return new ComandBus();
	});