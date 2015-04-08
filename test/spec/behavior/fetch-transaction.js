/* 
* @Author: ThanhCong
* @Date:   2015-04-08 09:19:57
* @Last Modified by:   ThanhCong
* @Last Modified time: 2015-04-08 11:29:52
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
		){
		describe('Bootstrap a Income transaction list', function() {
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

			var data = [
				{
					name: 'lr'
				},
				{
					name: 'ip'
				}
			]

			beforeEach(function(){
				spyOn(transListCtrl, 'initialize').and.callThrough();
				spyOn(CommandBus, 'execute').and.callThrough();
				spyOn(FetchTransactionHandler, 'handle').and.callThrough();
				spyOn(Transactions, 'getIncome').and.callFake(function(callback){
					callback(data);
				});
				spyOn(Observer, 'publish').and.callThrough();
				spyOn(transListCtrl, 'render');
			});

			beforeEach(function(){
				transListCtrl.initialize('income');
			});

			it('constructor() should be called with Income param', function(){
				expect(transListCtrl.initialize).toHaveBeenCalled();
				expect(transListCtrl.initialize).toHaveBeenCalledWith('income');
			});

			it('then execute() in CommandBus should beforeEach called with FetchTransaction command and Income type', function(){
				expect(CommandBus.execute).toHaveBeenCalled();
				expect(CommandBus.execute).toHaveBeenCalledWith('FetchTransaction', jasmine.objectContaining({
					type: 'income'
				}));
			});

			it('then FetchTransactionHandler should be handled command with "income" type', function(){
				expect(FetchTransactionHandler.handle).toHaveBeenCalled();
				expect(FetchTransactionHandler.handle).toHaveBeenCalledWith(jasmine.objectContaining({
					type: 'income'
				}));
			});

			it('then getIncome() in Transactions service should be called', function(){
				expect(Transactions.getIncome).toHaveBeenCalled();
			});

			it('then Observer should be pushlish RenderTransactions message', function(){
				expect(Observer.publish).toHaveBeenCalled();
				expect(Observer.publish).toHaveBeenCalledWith('RenderTransactions', data);
			});

			it('then TransactionListCtrl should be rendered list', function(){
				expect(transListCtrl.render).toHaveBeenCalled();
				expect(transListCtrl.render).toHaveBeenCalledWith(data);
			});
		});
	});