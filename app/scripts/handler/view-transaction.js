/* 
* @Author: ThanhCong
* @Date:   2015-04-06 09:59:15
* @Last Modified by:   ThanhCong
* @Last Modified time: 2015-04-06 13:57:51
*/

'use strict';

/* global define */

define(['core/observer', 'service/transactions'], function(observer, Transactions){
	var handler = function(){

	}

	handler.prototype = {
		handle : function(data){
			var transaction = Transactions.getById(data.id);
			observer.publish('RenderTransactionDetail', transaction);
		}
	};

	return new handler();
});