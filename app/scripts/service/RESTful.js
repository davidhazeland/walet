/* 
 * @Author: ThanhCong
 * @Date:   2015-04-09 16:46:09
 * @Last Modified by:   ThanhCong
 * @Last Modified time: 2015-04-09 16:53:25
 */

'use strict';

/* global define */

define(['jquery'], function($) {
    var Service = function(url) {
        this.url = url;
    };

    Service.prototype = {
        get: function(query) {
            return this.request('GET', query);
        },

        post: function(data) {
            return this.request('POST', data);
        },

        put: function(data) {
            return this.request('PUT', data);
        },

        del: function(data) {
            return this.request('DELETE', data);
        },

        request: function(method, data) {
            var successCallback,
                errorCallback;

            $.ajax({
                url: this.url,
                dataType: 'JSON',
                method: method,
                data: data,
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
                error: function(callback) {
                    errorCallback = callback;
                }
            }
        }
    };

    return Service;
});