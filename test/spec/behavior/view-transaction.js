'use strict';

/* global define, describe, it, expect */

define([
		'angularMock',
		'commandBus',
		'observer',
		'controller/transaction-list',
		'controller/transaction-detail',
		'handler/view-transaction',
		'service/transactions'
	],
	function(
		angularMock,
		CommandBus,
		Observer,
		TransactionListCtrl,
		TransactionDetailCtrl,
		ViewTransactionHandler,
		Transactions) {
		describe('Give a Transaction list view', function() {
			var transListScope,
				transDetailScope,
				transListCtrl,
				transDetailCtrl;

			beforeEach(module('portfolio'));

			//////////////////////////////////
			// Inject angular controller //
			//////////////////////////////////
			beforeEach(inject(function(_$controller_) {
				transListScope = {};
				transDetailScope = {};
				transListCtrl = _$controller_('TransactionListCtrl', {
					$scope: transListScope
				});
				transDetailCtrl = _$controller_('TransactionDetailCtrl', {
					$scope: transDetailScope
				});
			}));

			describe('When a transaction item clicked', function() {
				/**
				 * Transaction model sample
				 * @type {Object}
				 */
				var data = {
					name: 'Lorem Ipsum',
					amount: 100,
					tag: 'lr',
					date: '13/7/2015'
				}

				//////////////////////
				// spy function //
				//////////////////////
				beforeEach(function() {
					spyOn(transListScope, 'handleItemClick').and.callThrough();
					spyOn(CommandBus, 'execute').and.callThrough();
					spyOn(ViewTransactionHandler, 'handle').and.callThrough();
					spyOn(Transactions, 'getById').and.callFake(function() {
						return data;
					});
					spyOn(Observer, 'publish').and.callThrough();
					spyOn(transDetailCtrl, 'render').and.callThrough();
				});

				beforeEach(function() {
					transListScope.handleItemClick();
				});

				it('handleItemClick() should be called', function() {
					expect(transListScope.handleItemClick).toHaveBeenCalled();
				});
				it('then execute() in CommandBus should be called with ViewTransaction command', function() {
					expect(CommandBus.execute).toHaveBeenCalled();
					expect(CommandBus.execute).toHaveBeenCalledWith('ViewTransaction', jasmine.any(Object));
				});
				it('then ViewTransactionHandler should be handled command', function() {
					expect(ViewTransactionHandler.handle).toHaveBeenCalled();
					expect(ViewTransactionHandler.handle).toHaveBeenCalledWith(jasmine.any(Object));
				});
				it('then should be called getById() in Transactions service', function() {
					expect(Transactions.getById).toHaveBeenCalled();
				});
				it('then Observer should be publish RenderTransactionDetail message', function() {
					expect(Observer.publish).toHaveBeenCalled();
					expect(Observer.publish).toHaveBeenCalledWith('RenderTransactionDetail', data);
				});
				it('then TransactionDetail should be called render()', function() {
					expect(transDetailCtrl.render).toHaveBeenCalled();
				});
			});
		});
	});