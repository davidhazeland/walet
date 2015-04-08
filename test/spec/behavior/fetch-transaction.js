/* 
 * @Author: ThanhCong
 * @Date:   2015-04-08 09:19:57
 * @Last Modified by:   ThanhCong
 * @Last Modified time: 2015-04-08 15:30:06
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
	describe('Bootstrap a transaction list', function() {
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

		var data = [{
			name: 'lr'
		}, {
			name: 'ip'
		}]

		beforeEach(function() {
			spyOn(transListCtrl, 'initialize').and.callThrough();
			spyOn(CommandBus, 'execute').and.callThrough();
			spyOn(FetchTransactionHandler, 'handle').and.callThrough();
			spyOn(Transactions, 'getIncome').and.callFake(function(callback) {
				callback(data);
			});
			spyOn(Transactions, 'getExpense').and.callFake(function(callback) {
				callback(data);
			});
			spyOn(Observer, 'publish').and.callThrough();
			spyOn(transListCtrl, 'render');
		});

		describe('If it was Income', function() {
			beforeEach(function() {
				transListCtrl.initialize('Income');
			});

			it('constructor() should be called with Income param', function() {
				expect(transListCtrl.initialize).toHaveBeenCalled();
				expect(transListCtrl.initialize).toHaveBeenCalledWith('Income');
			});

			it('then execute() in CommandBus should beforeEach called with FetchTransaction command and Income type', function() {
				expect(CommandBus.execute).toHaveBeenCalled();
				expect(CommandBus.execute).toHaveBeenCalledWith('FetchTransaction', jasmine.objectContaining({
					type: 'Income'
				}));
			});

			it('then FetchTransactionHandler should be handled command with "Income" type', function() {
				expect(FetchTransactionHandler.handle).toHaveBeenCalled();
				expect(FetchTransactionHandler.handle).toHaveBeenCalledWith(jasmine.objectContaining({
					type: 'Income'
				}));
			});

			it('then getIncome() in Transactions service should be called', function() {
				expect(Transactions.getIncome).toHaveBeenCalled();
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

describe('Else if it was Expense', function() {
	beforeEach(function() {
				transListCtrl.initialize('Expense');
			});

			it('constructor() should be called with Expense param', function() {
				expect(transListCtrl.initialize).toHaveBeenCalled();
				expect(transListCtrl.initialize).toHaveBeenCalledWith('Expense');
			});

			it('then execute() in CommandBus should beforeEach called with FetchTransaction command and Expense type', function() {
				expect(CommandBus.execute).toHaveBeenCalled();
				expect(CommandBus.execute).toHaveBeenCalledWith('FetchTransaction', jasmine.objectContaining({
					type: 'Expense'
				}));
			});

			it('then FetchTransactionHandler should be handled command with "Expense" type', function() {
				expect(FetchTransactionHandler.handle).toHaveBeenCalled();
				expect(FetchTransactionHandler.handle).toHaveBeenCalledWith(jasmine.objectContaining({
					type: 'Expense'
				}));
			});

			it('then getExpense() in Transactions service should be called', function() {
				expect(Transactions.getExpense).toHaveBeenCalled();
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