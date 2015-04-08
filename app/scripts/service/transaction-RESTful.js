/* 
* @Author: ThanhCong
* @Date:   2015-04-06 10:32:15
* @Last Modified by:   ThanhCong
* @Last Modified time: 2015-04-08 08:55:30
*/

'use strict';

/* global define */

define([], function(){
	var Service = function(){
		
	}

	Service.prototype = {
		get: function(id){
			return id;
		}
	};

	return new Service();
});