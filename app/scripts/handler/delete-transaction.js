/* 
* @Author: ThanhCong
* @Date:   2015-04-09 10:13:35
* @Last Modified by:   ThanhCong
* @Last Modified time: 2015-04-09 10:18:44
*/

'use strict';

/* global define */

define(['observer', 'service/transaction'], function(Observer, Transaction){
	var handler = function(){

	}

	handler.prototype = {
		handle : function(data){
			Transaction.remove(data, function(response){
				Observer.publish('TransactionDeleted', data);
			});
		}
	};

	return new handler();
});