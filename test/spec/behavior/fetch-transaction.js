/* 
 * @Author: ThanhCong
 * @Date:   2015-04-08 09:19:57
 * @Last Modified by:   ThanhCong
 * @Last Modified time: 2015-04-08 16:18:38
 */

'use strict';

/* global define */

define([
	'angularMock',
	'commandBus',
	'observer',
	'controller/transaction-list',
	'handler/fetch-transaction',
	'service/transactions'
], function(
	angularMock,
	CommandBus,
	Observer,
	TransactionListCtrl,
	FetchTransactionHandler,
	Transactions
) {
	describe('Give a Transaction list', function() {
		var transListScope,
			transListCtrl;

		beforeEach(module('portfolio'));

		//////////////////////////////////
		// Inject angular controller //
		//////////////////////////////////
		beforeEach(inject(function(_$controller_) {
			transListScope = {};
			transListCtrl = _$controller_('TransactionListCtrl', {
				$scope: transListScope
			});
		}));



		describe('When load() called', function() {
			var data = [{
				name: 'lr'
			}, {
				name: 'ip'
			}]

			beforeEach(function() {
				spyOn(transListCtrl, 'load').and.callThrough();
				spyOn(CommandBus, 'execute').and.callThrough();
				spyOn(FetchTransactionHandler, 'handle').and.callThrough();
				spyOn(Transactions, 'fetch').and.callFake(function(callback) {
					callback(data);
				});
				spyOn(Observer, 'publish').and.callThrough();
				spyOn(transListCtrl, 'render');
			});

			beforeEach(function() {
				transListCtrl.load();
			});

			it('then execute() in CommandBus should beforeEach called with FetchTransaction command and Income type', function() {
				expect(CommandBus.execute).toHaveBeenCalled();
				expect(CommandBus.execute).toHaveBeenCalledWith('FetchTransaction', jasmine.any(Object));
			});

			it('then FetchTransactionHandler should be handled command', function() {
				expect(FetchTransactionHandler.handle).toHaveBeenCalled();
			});

			it('then fetch() in Transactions service should be called', function() {
				expect(Transactions.fetch).toHaveBeenCalled();
			});

			it('then Observer should be pushlish RenderTransactions message', function() {
				expect(Observer.publish).toHaveBeenCalled();
				expect(Observer.publish).toHaveBeenCalledWith('RenderTransactions', data);
			});

			it('then TransactionListCtrl should be rendered list', function() {
				expect(transListCtrl.render).toHaveBeenCalled();
				expect(transListCtrl.render).toHaveBeenCalledWith(data);
			});
			
		});
	});
});