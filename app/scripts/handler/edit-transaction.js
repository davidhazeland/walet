/* 
* @Author: ThanhCong
* @Date:   2015-04-08 13:07:16
* @Last Modified by:   ThanhCong
* @Last Modified time: 2015-04-09 10:15:38
*/

'use strict';

/* global define */

define(['observer'], function(Observer){
	var handler = function(){

	}

	handler.prototype = {
		handle : function(data){
			Observer.publish('RenderTransactionEditor', data);
		}
	};

	return new handler();
});