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
				Transaction.add(data, function(response){
					if (response.success) {
						data.id = response.data.id;
						Observer.publish('TransactionAdded', data);
					}
				});
			} else {
				Transaction.save(data, function(response){
					if (response.success) {
						Observer.publish('TransactionSaved', data);
					}
				});
			}
		},

		saveTransactionCallback : function(data){
			
		}
	};

	return new handler();
});