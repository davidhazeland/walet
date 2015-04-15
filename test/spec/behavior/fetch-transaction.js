/* 
 * @Author: ThanhCong
 * @Date:   2015-04-08 09:19:57
 * @Last Modified by:   ThanhCong
 * @Last Modified time: 2015-04-15 10:09:05
 */

'use strict';

/* global define */

define([
	'angularMock',
	'commandBus',
	'observer',
	'controller/transactions',
	'controller/transaction-list',
	'controller/total',
	'handler/fetch-transaction',
	'service/transactions',
	'model/transactions'
], function(
	angularMock,
	CommandBus,
	Observer,
	TransactionsCtrl,
	TransactionListCtrl,
	TotalCtrl,
	FetchTransactionHandler,
	Transactions,
	TransactionsModel
) {
	describe('Give a Transaction list', function() {
		var transListScope,
			transListCtrl,
			transScope,
			transCtrl,
			totalScope,
			totalCtrl;

		beforeEach(module('portfolio'));

		//////////////////////////////////
		// Inject angular controller //
		//////////////////////////////////
		beforeEach(inject(function(_$controller_) {
			transListScope = {
				$on: function() {

				}
			};
			transScope = {};
			totalScope = {
				$apply: function() {

				}
			};
			transListCtrl = _$controller_('TransactionListCtrl', {
				$scope: transListScope
			});
			transCtrl = _$controller_('TransactionsCtrl', {
				$scope: transScope
			});
			totalCtrl = _$controller_('TotalCtrl', {
				$scope: totalScope
			});
		}));

		describe('When load() called', function() {
			var data = {
				items: [{
					name: 'lr'
				}, {
					name: 'ip'
				}]
			}

			beforeEach(function() {
				spyOn(transCtrl, 'load').and.callThrough();
				spyOn(CommandBus, 'execute').and.callThrough();
				spyOn(FetchTransactionHandler, 'handle').and.callThrough();
				spyOn(Transactions, 'fetch').and.callFake(function(callback) {
					callback(data);
				});
				spyOn(TransactionsModel, 'load').and.callThrough();
				spyOn(Observer, 'publish').and.callThrough();
				// spyOn(transListCtrl, 'render');
			});

			beforeEach(function() {
				transCtrl.load();
			});

			it('then execute() in CommandBus should beforeEach called with FetchTransaction command', function() {
				expect(CommandBus.execute).toHaveBeenCalled();
				expect(CommandBus.execute).toHaveBeenCalledWith('FetchTransaction', jasmine.any(Object));
			});

			it('then FetchTransactionHandler should be handled command', function() {
				expect(FetchTransactionHandler.handle).toHaveBeenCalled();
			});

			it('then fetch() in Transactions service should be called', function() {
				expect(Transactions.fetch).toHaveBeenCalled();
			});

			it('then shoud be loaded data into Transacions model', function() {
				expect(TransactionsModel.load).toHaveBeenCalled();
				expect(TransactionsModel.load).toHaveBeenCalledWith(data);
			});

			it('then Observer should be pushlish TransactionsLoaded message', function() {
				expect(Observer.publish).toHaveBeenCalled();
				expect(Observer.publish).toHaveBeenCalledWith('TransactionsLoaded', data);
			});

			it('then Total scope should be equal right value', function() {
				expect(totalScope.data).toEqual(data);
			});

			it('then TransactionList scope should be equal right value', function() {
				expect(transListScope.data).toEqual(data);
			});
		});
	});
});