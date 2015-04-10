/* 
* @Author: ThanhCong
* @Date:   2015-04-09 16:46:09
* @Last Modified by:   ThanhCong
* @Last Modified time: 2015-04-09 16:53:25
*/

'use strict';

/* global define */

define(['jquery'], function($) {
	var Service = function(url){
		this.url = url;
	};

	Service.prototype = {
		get: function(query) {
			var successCallback,
				errorCallback;
			$.ajax({
				url: this.url,
				dataType: 'JSON',
				data: query,
				success: function(response) {
					if (successCallback) successCallback(response);
				},
				error: function(error) {
					if (errorCallback) errorCallback(error);
				}
			});

			return {
				success: function(callback) {
					successCallback = callback;
				},
				error: function(callback){
					errorCallback = callback;
				}
			}
		}
	};

	return Service;
});