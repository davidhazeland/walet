/* 
 * @Author: ThanhCong
 * @Date:   2015-04-06 10:32:15
 * @Last Modified by:   ThanhCong
 * @Last Modified time: 2015-04-09 16:55:16
 */

'use strict';

/* global define */

define(['./RESTful'], function(RESTful) {
	var Service = function() {
		this.RESTful = new RESTful('/data/transactions.json');
	}

	Service.prototype = {
		get : function(query) {
			return this.RESTful.get(query);
		}
	};

	return new Service();
});