'use strict';

/* global define, describe, it, expect */

define(['core/observer'], function(observer) {
	describe('Observer', function() {
		it('subscribe() should be defined', function() {
			expect(observer.subscribe).toBeDefined();
		});
	});
});