'use strict';

/* global define, description, it, expect */

define(['angular'], function(angular) {
	describe('Require AngularJS', function() {
		it('angular object should be defined', function() {
			expect(angular).toBeDefined();
		});
	});
});