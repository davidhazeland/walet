/* 
 * @Author: ThanhCong
 * @Date:   2015-04-06 10:29:41
 * @Last Modified by:   ThanhCong
 * @Last Modified time: 2015-04-15 10:31:23
 */
'use strict';

/* global define */

define(['./RESTful'], function(RESTful) {
	var Service = function() {
		var url = "http://localhost:3000/transaction/dashboard";
		this.RESTful = new RESTful(url);
	}

	Service.prototype = {
		get : function(query) {
			return this.RESTful.get(query);
		},

		post : function(data) {
			return this.RESTful.post(data);
		},

		put : function(data) {
			return this.RESTful.put(data)
		},

		del: function(data) {
			return this.RESTful.del(data)
		}
	};

	return new Service();
});