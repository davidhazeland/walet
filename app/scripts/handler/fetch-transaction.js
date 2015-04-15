/* 
* @Author: ThanhCong
* @Date:   2015-04-08 09:51:08
* @Last Modified by:   ThanhCong
* @Last Modified time: 2015-04-15 10:34:17
*/

'use strict';

/* global define */

define(['observer', 'service/transactions', 'model/transactions'], 
	function(observer, Transactions, TransactionsModel){
	var handler = function(){

	}

	handler.prototype = {
		handle : function(data){
			Transactions.fetch(this.fetchTransactionsCallback);
		},

		fetchTransactionsCallback : function(transactions){
			TransactionsModel.load(transactions);
			observer.publish('TransactionsFetched', transactions);
		}
	};

	return new handler();
});