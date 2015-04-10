/* 
* @Author: ThanhCong
* @Date:   2015-04-08 16:35:07
* @Last Modified by:   ThanhCong
* @Last Modified time: 2015-04-08 16:41:13
*/

'use strict';

/* global define */

define(['observer', 'service/transaction-search'], function(Observer, TransactionSearch){
	var handler = function(){

	}

	handler.prototype = {
		handle : function(data){
			TransactionSearch.update(data.term);
			Observer.publish('LoadTransactions');
		}
	};

	return new handler();
});