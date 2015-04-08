/* 
* @Author: ThanhCong
* @Date:   2015-04-08 13:40:02
* @Last Modified by:   ThanhCong
* @Last Modified time: 2015-04-08 15:23:19
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
			if (!data.id) {
				Transaction.add(data, this.saveTransactionCallback);
			} else {
				Transaction.save(data, this.saveTransactionCallback);
			}
		},

		saveTransactionCallback : function(data){
			Observer.publish('TransactionSaved', data);
		}
	};

	return new handler();
});