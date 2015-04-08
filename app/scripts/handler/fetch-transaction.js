/* 
* @Author: ThanhCong
* @Date:   2015-04-08 09:51:08
* @Last Modified by:   ThanhCong
* @Last Modified time: 2015-04-08 11:31:57
*/

'use strict';

/* global define */

define(['observer', 'service/transactions'], function(observer, Transactions){
	var handler = function(){

	}

	handler.prototype = {
		handle : function(data){
			switch (data.type) {
				case 'expense' : {
					Transactions.getExpense(this.getTransactionsCallback);
					break;
				}
				case 'income' : {
					Transactions.getIncome(this.getTransactionsCallback);
					break;
				}
				default: return false;
			}
		},

		getTransactionsCallback : function(transactions){
			observer.publish('RenderTransactions', transactions);
		}
	};

	return new handler();
});