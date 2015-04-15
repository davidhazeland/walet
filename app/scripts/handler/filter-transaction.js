/* 
* @Author: ThanhCong
* @Date:   2015-04-08 21:10:50
* @Last Modified by:   ThanhCong
* @Last Modified time: 2015-04-15 16:48:29
*/

'use strict';

/* global define */

define(['observer', 'service/transaction-filter'], function(Observer, TransactionFilter){
	var handler = function(){

	}

	handler.prototype = {
		handle : function(data){
			TransactionFilter.update(data.filter);
			Observer.publish('DateFilterChanged', data.name);
			Observer.publish('LoadTransactions');
		}
	};

	return new handler();
});