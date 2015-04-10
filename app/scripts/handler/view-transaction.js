/* 
* @Author: ThanhCong
* @Date:   2015-04-06 09:59:15
* @Last Modified by:   ThanhCong
* @Last Modified time: 2015-04-08 16:40:28
*/

'use strict';

/* global define */

define(['observer', 'service/transactions'], function(Observer, Transactions){
	var handler = function(){

	}

	handler.prototype = {
		handle : function(data){
			var transaction = Transactions.getById(data.id);
			Observer.publish('RenderTransactionDetail', transaction);
		}
	};

	return new handler();
});