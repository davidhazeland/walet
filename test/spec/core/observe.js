/* 
 * @Author: ThanhCong
 * @Date:   2015-04-15 10:57:24
 * @Last Modified by:   ThanhCong
 * @Last Modified time: 2015-04-15 11:17:39
 */

'use strict';

/* global define */

define(['observer'], function(Observer) {
	describe('Give a Observer', function() {
		beforeEach(function() {
			spyOn(Observer, 'subscribe', 'unsubscribe', 'publish').and.callThrough();
		});

		describe('Subscribe a Load message', function() {
			var o = {
				handleLoad: function(){

				}
			};

			beforeEach(function() {
				spyOn(o, 'handleLoad');
				Observer.subscribe('Load', o.handleLoad, o);
			});

			describe('When publish Load message', function() {
				beforeEach(function(){
					Observer.publish('Load');
				});

				it('then handler function should be called', function(){
					expect(o.handleLoad).toHaveBeenCalled();
				});
			});

			describe('When unsubscribe Load message and publish', function(){
				beforeEach(function(){
					Observer.unsubscribe('Load', o.handleLoad, o);
					Observer.publish('Load');
				});

				it('then handler function should not be called', function(){
					expect(o.handleLoad).not.toHaveBeenCalled();
				});
			});
		});
	});
});