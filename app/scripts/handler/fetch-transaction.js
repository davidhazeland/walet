/* 
* @Author: ThanhCong
* @Date:   2015-04-08 09:51:08
* @Last Modified by:   ThanhCong
* @Last Modified time: 2015-04-08 16:12:17
*/

'use strict';

/* global define */

define(['observer', 'service/transactions'], function(observer, Transactions){
	var handler = function(){

	}

	handler.prototype = {
		handle : function(data){
			Transactions.fetch(this.fetchTransactionsCallback);
		},

		fetchTransactionsCallback : function(transactions){
			observer.publish('RenderTransactions', transactions);
		}
	};

	return new handler();
});