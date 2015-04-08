/* 
* @Author: ThanhCong
* @Date:   2015-04-08 13:40:02
* @Last Modified by:   ThanhCong
* @Last Modified time: 2015-04-08 13:47:05
*/
/* 
* @Author: ThanhCong
* @Date:   2015-04-08 13:40:02
* @Last Modified by:   ThanhCong
* @Last Modified time: 2015-04-08 13:40:02
*/

'use strict';

/* global define */

define(['observer', 'service/transaction'], function(Observer, Transaction){
	var handler = function(){

	}

	handler.prototype = {
		handle : function(data){
			Transaction.save(this.saveTransactionCallback);
		},

		saveTransactionCallback : function(data){
			Observer.publish('TransactionSaved', data);
		}
	};

	return new handler();
});