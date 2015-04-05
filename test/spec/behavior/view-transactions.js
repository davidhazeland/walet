'use strict';

/* global define, describe, it, expect */

define(['angularMock', 'controller/transaction-list'], function() {
	describe('View Transaction', function() {
		var scope,
			controller;

		beforeEach(module('portfolio'));

		beforeEach(inject(function(_$controller_) {
			scope = {};
			controller = _$controller_('TransactionListCtrl', {
				$scope: scope
			});
		}));

		describe('Initialize TransactionListCtrl', function() {
			it('scope should be defined', function() {
				expect(scope).toBeDefined();
			});
			it('handleItemClick() should be defined', function() {
				expect(scope.handleItemClick).toBeDefined();
			});
		});

		describe('When item clicked', function() {
			beforeEach(function() {
				spyOn(scope, 'handleItemClick');
				scope.handleItemClick();
			});
			it('handleItemClick() should be called', function() {
				expect(scope.handleItemClick).toHaveBeenCalled();
			});
		});
	});
});