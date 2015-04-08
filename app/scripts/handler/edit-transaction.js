/* 
* @Author: ThanhCong
* @Date:   2015-04-08 13:07:16
* @Last Modified by:   ThanhCong
* @Last Modified time: 2015-04-08 13:13:56
*/

'use strict';

/* global define */

define(['observer', 'service/transactions'], function(Observer, Transactions){
	var handler = function(){

	}

	handler.prototype = {
		handle : function(data){
			Observer.publish('RenderTransactionEditor', data);
		}
	};

	return new handler();
});