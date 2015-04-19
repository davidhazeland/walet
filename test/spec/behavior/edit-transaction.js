/* 
 * @Author: ThanhCong
 * @Date:   2015-04-08 12:49:39
 * @Last Modified by:   ThanhCong
 * @Last Modified time: 2015-04-15 10:00:19
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
			
			var data = {
				name: 'lr',
				amount: 10,
				tag: 'lr',
				date: '13/7/2015'
			};

			beforeEach(inject(function(_$controller_) {
				transDetailScope = {
					item: data,
					$on: function(){

					}
				};
				transEditorScope = {
					$on: function(){
						
					},
					$apply: function(){
						
					}
				};
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
					spyOn(Observer, 'publish').and.callThrough();
				});

				beforeEach(function() {
					transDetailScope.handleEditBtnClick();
				});

				it('then handleEditBtnClick() should be called', function() {
					expect(transDetailScope.handleEditBtnClick).toHaveBeenCalled();
				});

				it('then Observer should be published OpenTransactionEditor', function() {
					expect(Observer.publish).toHaveBeenCalled();
					expect(Observer.publish).toHaveBeenCalledWith('OpenTransactionEditor', data);
				});

				it('then TransactionEditor scope should be equal right data', function(){
					expect(transEditorScope.model).toEqual(data);
				});

				it('then should be show Transaction editor', function(){
					expect(transEditorScope.visibility).toEqual(true);
				});

				// it('then TransactionEditorCtrl should be rendered', function() {
				// 	expect(transEditorCtrl.render).toHaveBeenCalled();
				// 	expect(transEditorCtrl.render).toHaveBeenCalledWith(jasmine.any(Object));
				// });
			});
		});
	});