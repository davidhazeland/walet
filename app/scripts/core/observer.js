/* 
* @Author: ThanhCong
* @Date:   2015-04-04 16:59:24
* @Last Modified by:   ThanhCong
* @Last Modified time: 2015-04-13 09:44:26
*/
'use strict';

/* global define */

define([], function(){
	var subscribe = function(channel, fn, context){
            context = context || this;
            if (!this.channels[channel]) this.channels[channel] = [];
            this.channels[channel].push({ context: context, callback: fn});
            return this;
        },

        unsubscribe = function(channel, fn, context) {
            context = context || this;
            if (!this.channels[channel]) return false;
            for (var i = 0, l = this.channels[channel].length; i < l; i++){
                var subscription = this.channels[channel][i];
                if (subscription.callback == fn && subscription.context == context) {
                    this.channels[channel].splice(i, 1);
                    return this;
                }
            }
        },

        publish = function(channel){
            if (!this.channels[channel]) return false;
            var args = Array.prototype.slice.call(arguments, 1);
            for (var i = 0, l = this.channels[channel].length; i < l; i++){
                var subscription = this.channels[channel][i];
                subscription.callback.apply(subscription.context, args);
            }
            return this;
        };

    return {
        channels : {},
        subscribe : subscribe,
        unsubscribe : unsubscribe,
        publish: publish,
        installTo : function(o){
            o.channels = {};
            o.subscribe = subscribe;
            o.publish = publish;
        }
    }
});