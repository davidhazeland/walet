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
		
	}

	Service.prototype = {
		get : function(query) {
			var url;
			switch(query.type) {
				case 'dashboard' : {
					url = '/data/dashboard.json';
					break;
				}

				case 'tagDashboard' : {
					url = '/data/tag-dashboard.json';
					break;
				}

				case 'compareDashboard' : {
					url = '/data/compare-dashboard.json';
					break;
				}

				default: {
					url = '/data/transactions.json';
				}
			}
			this.RESTful = new RESTful(url);
			return this.RESTful.get(query);
		}
	};

	return new Service();
});