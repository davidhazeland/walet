/* 
 * @Author: ThanhCong
 * @Date:   2015-04-08 13:21:09
 * @Last Modified by:   ThanhCong
 * @Last Modified time: 2015-04-08 15:26:40
 */

'use strict';

/* global define */

define([
		'angularMock',
		'commandBus',
		'observer',
		'controller/transaction-list',
		'controller/transaction-editor',
		'handler/save-transaction',
		'service/transaction'
	],
	function(
		angularMock,
		CommandBus,
		Observer,
		TransactionListCtrl,
		TransactionEditorCtrl,
		SaveTransactionHandler,
		Transaction) {
		describe('Give a transaction editor popup', function() {
			var transListScope,
				transListCtrl,
				transEditorScope,
				transEditorCtrl;

			beforeEach(module('portfolio'));

			//////////////////////////////////
			// Inject angular controller //
			//////////////////////////////////
			beforeEach(inject(function(_$controller_) {
				transListScope = {};
				transEditorScope = {};
				transListCtrl = _$controller_('TransactionListCtrl', {
					$scope: transListScope
				});
				transEditorCtrl = _$controller_('TransactionEditorCtrl', {
					$scope: transEditorScope
				});
			}));

			describe('When save button clicked', function() {
				beforeEach(function() {
					spyOn(CommandBus, 'execute').and.callThrough();
					spyOn(SaveTransactionHandler, 'handle').and.callThrough();
					spyOn(Transaction, 'save').and.callFake(function(data, callback) {
						callback({
							id: 13,
							name: 'Lorem Ipsum'
						});
					});
					spyOn(Transaction, 'add').and.callFake(function(data, callback) {
						callback({
							id: 13,
							name: 'Lorem Ipsum'
						});
					});
					spyOn(Observer, 'publish').and.callThrough();
					spyOn(transEditorCtrl, 'collapse').and.callThrough();
					spyOn(transListCtrl, 'refresh').and.callThrough();
				});

				describe('If transaction existed', function() {
					beforeEach(function() {
						spyOn(transEditorScope, 'handleSaveBtnClick').and.callFake(function() {
							CommandBus.execute('SaveTransaction', {
								id: 13,
								name: 'Lorem Ipsum'
							});
						});

						transEditorScope.handleSaveBtnClick();
					});

					it('then execute() in CommandBus should be called with SaveTransaction command and ID', function() {
						expect(CommandBus.execute).toHaveBeenCalled();
					});

					it('then SaveTransactionHandler should be handled command', function() {
						expect(SaveTransactionHandler.handle).toHaveBeenCalled();
						expect(SaveTransactionHandler.handle).toHaveBeenCalledWith(jasmine.objectContaining({
							id: 13
						}));
					});

					it('then save() in Tranasction service should be called', function() {
						expect(Transaction.save).toHaveBeenCalled();
					});

					it('then Observer should publish TransactionSaved message', function() {
						expect(Observer.publish).toHaveBeenCalled();
						expect(Observer.publish).toHaveBeenCalledWith('TransactionSaved', jasmine.any(Object));
					});

					it('then Transaction editor should be collapsed', function() {
						expect(transEditorCtrl.collapse).toHaveBeenCalled();
					});

					it('then Transaction list should be refreshed', function() {
						expect(transListCtrl.refresh).toHaveBeenCalled();
					});
				});
				describe('Else', function() {
					beforeEach(function() {
						spyOn(transEditorScope, 'handleSaveBtnClick').and.callFake(function() {
							CommandBus.execute('SaveTransaction', {
								name: 'Lorem Ipsum'
							});
						});

						transEditorScope.handleSaveBtnClick();
					});

					it('then execute() in CommandBus should be called with SaveTransaction command and without ID', function() {
						expect(CommandBus.execute).toHaveBeenCalled();
					});

					it('then SaveTransactionHandler should be handled command', function() {
						expect(SaveTransactionHandler.handle).toHaveBeenCalled();
					});

					it('then add() in Tranasction service should be called', function() {
						expect(Transaction.add).toHaveBeenCalled();
					});

					it('then Observer should publish TransactionSaved message', function() {
						expect(Observer.publish).toHaveBeenCalled();
						expect(Observer.publish).toHaveBeenCalledWith('TransactionSaved', jasmine.any(Object));
					});

					it('then Transaction editor should be collapsed', function() {
						expect(transEditorCtrl.collapse).toHaveBeenCalled();
					});

					it('then Transaction list should be refreshed', function() {
						expect(transListCtrl.refresh).toHaveBeenCalled();
					});
				});
			});
		});
	});