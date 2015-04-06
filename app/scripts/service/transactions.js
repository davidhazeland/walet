/* 
* @Author: ThanhCong
* @Date:   2015-04-06 10:29:41
* @Last Modified by:   ThanhCong
* @Last Modified time: 2015-04-06 13:35:44
*/

'use strict';

/* global define */

define(['service/transaction-RESTful'], function (TransactionRESTful) {
	var Service = function(){

	};

	Service.prototype = {
		getById : function (id) {
			var transaction = TransactionRESTful.get(id);
			return transaction;
		}
	};

	return new Service();
});