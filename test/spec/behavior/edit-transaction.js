/* 
 * @Author: ThanhCong
 * @Date:   2015-04-08 12:49:39
 * @Last Modified by:   ThanhCong
 * @Last Modified time: 2015-04-08 13:20:10
 */

'use strict';

/* global define */

define([
		'angularMock',
		'commandBus',
		'observer',
		'controller/transaction-detail',
		'controller/transaction-editor',
		'handler/edit-transaction',
		'service/transactions'
	],
	function(
		angularMock,
		CommandBus,
		Observer,
		TransactionDetailCtrl,
		TransactionEditorCtrl,
		EditTransactionHandler,
		Transactions) {
		describe('Give a transaction detail popup', function() {
			var transDetailScope,
				transDetailCtrl,
				transEditorScope,
				transEditorCtrl;

			beforeEach(module('portfolio'));

			//////////////////////////////////
			// Inject angular controller //
			//////////////////////////////////
			beforeEach(inject(function(_$controller_) {
				transDetailScope = {};
				transEditorScope = {};
				transDetailCtrl = _$controller_('TransactionDetailCtrl', {
					$scope: transDetailScope
				});
				transEditorCtrl = _$controller_('TransactionEditorCtrl', {
					$scope: transEditorScope
				});
			}));

			describe('When edit button clicked', function() {
				beforeEach(function() {
					spyOn(transDetailScope, 'handleEditBtnClick').and.callThrough();
					spyOn(CommandBus, 'execute').and.callThrough();
					spyOn(EditTransactionHandler, 'handle').and.callThrough();
					spyOn(Observer, 'publish').and.callThrough();
					spyOn(transEditorCtrl, 'render').and.callThrough();
				});

				beforeEach(function() {
					transDetailScope.handleEditBtnClick();
				});

				it('then handleEditBtnClick() should be called', function() {
					expect(transDetailScope.handleEditBtnClick).toHaveBeenCalled();
				});

				it('then excute() in CammandBus should be called with EditTransaction command', function() {
					expect(CommandBus.execute).toHaveBeenCalled();
					expect(CommandBus.execute).toHaveBeenCalledWith('EditTransaction', jasmine.any(Object));
				});

				it('then EditTransactionHandler should be handled command', function() {
					expect(EditTransactionHandler.handle).toHaveBeenCalled();
					expect(EditTransactionHandler.handle).toHaveBeenCalledWith(jasmine.any(Object));
				});

				it('then Observer should be published RenderTransactionEditor', function() {
					expect(Observer.publish).toHaveBeenCalled();
					expect(Observer.publish).toHaveBeenCalledWith('RenderTransactionEditor', jasmine.any(Object));
				});

				it('then TransactionEditorCtrl should be rendered', function() {
					expect(transEditorCtrl.render).toHaveBeenCalled();
					expect(transEditorCtrl.render).toHaveBeenCalledWith(jasmine.any(Object));
				});
			});
		});
	});