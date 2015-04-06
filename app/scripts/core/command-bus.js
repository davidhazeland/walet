/* 
* @Author: ThanhCong
* @Date:   2015-04-06 09:45:37
* @Last Modified by:   ThanhCong
* @Last Modified time: 2015-04-06 13:35:07
*/

'use strict';

/* global define */

define([
	'handler/view-transaction'
	], function(
		ViewTransactionHandler
		){
		var ComandBus = function(){

		};

		ComandBus.prototype = {
			maps: {
				'ViewTransaction': ViewTransactionHandler
			},

			execute: function(command, data){
				this.resolveHander(command).handle(data);
			},

			resolveHander : function (command) {
				var handler = this.maps[command];
				return handler;
			}
		};

		return new ComandBus();
	});