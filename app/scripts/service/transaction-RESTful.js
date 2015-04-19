/* 
 * @Author: ThanhCong
 * @Date:   2015-04-06 10:32:15
 * @Last Modified by:   ThanhCong
 * @Last Modified time: 2015-04-11 23:57:37
 */

'use strict';

/* global define */

define(['./RESTful'], function(RESTful) {
	var Service = function() {
		var url = "http://localhost:3000/transaction";
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