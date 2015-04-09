/* 
 * @Author: ThanhCong
 * @Date:   2015-04-09 10:01:46
 * @Last Modified by:   ThanhCong
 * @Last Modified time: 2015-04-09 10:22:13
 */

'use strict';

/* global define */

define([
		'angularMock',
		'commandBus',
		'observer',
		'controller/transaction-detail',
		'controller/transaction-list',
		'handler/delete-transaction',
		'service/transaction'
	],
	function(
		angularMock,
		CommandBus,
		Observer,
		TransactionDetailCtrl,
		TransactionListCtrl,
		DeleteTransactionHandler,
		Transaction) {
		describe('Give a Transaction detail popup and Transaction list', function() {
			var transDetailScope,
				transDetailCtrl,
				transListScope,
				transListCtrl;

			beforeEach(module('portfolio'));

			//////////////////////////////////
			// Inject angular controller //
			//////////////////////////////////
			beforeEach(inject(function(_$controller_) {
				transDetailScope = {};
				transListScope = {};
				transDetailCtrl = _$controller_('TransactionDetailCtrl', {
					$scope: transDetailScope
				});
				transListCtrl = _$controller_('TransactionListCtrl', {
					$scope: transListScope
				});
			}));

			describe('When delete button click', function() {
				beforeEach(function() {
					spyOn(transDetailScope, 'handleDeleteBtnClick').and.callFake(function() {
						CommandBus.execute('DeleteTransaction', {
							id: 13
						});
					});
					spyOn(CommandBus, 'execute').and.callThrough();
					spyOn(DeleteTransactionHandler, 'handle').and.callThrough();
					spyOn(Transaction, 'remove').and.callThrough();
					spyOn(Observer, 'publish').and.callThrough();
					spyOn(transDetailCtrl, 'collapse').and.callThrough();
					spyOn(transListCtrl, 'refresh').and.callThrough();

				});

				beforeEach(function() {
					transDetailScope.handleDeleteBtnClick();
				});

				it('then execute() in CommandBus should be called with DeleteTransaction command', function(){
					expect(CommandBus.execute).toHaveBeenCalled();
					expect(CommandBus.execute).toHaveBeenCalledWith('DeleteTransaction', jasmine.any(Object));
				});

				it('then DeleteTransactionHandler should be handled command', function(){
					expect(DeleteTransactionHandler.handle).toHaveBeenCalled();
				});

				it('then should be called remove() in Transaction service with id', function(){
					expect(Transaction.remove).toHaveBeenCalled();
					expect(Transaction.remove).toHaveBeenCalledWith({
						id: 13
					}, jasmine.any(Function));
				});

				it('then Observer should published TransactionDeleted message', function(){
					expect(Observer.publish).toHaveBeenCalled();
					expect(Observer.publish).toHaveBeenCalledWith('TransactionDeleted', jasmine.any(Object));
				});

				it('then TransactionDetailCtrl collapse() should be called', function(){
					expect(transDetailCtrl.collapse).toHaveBeenCalled();
				});

				it('then TransactionListCtrl refresh() should be called()', function(){
					expect(transListCtrl.refresh).toHaveBeenCalled();
				});
			});
		});

	});