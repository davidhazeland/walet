/* 
* @Author: ThanhCong
* @Date:   2015-04-08 21:02:18
* @Last Modified by:   ThanhCong
* @Last Modified time: 2015-04-15 10:09:40
*/

'use strict';

/* global define */

define([
	'angularMock',
	'commandBus',
	'observer',
	'controller/transactions',
	'controller/transaction-list',
	'controller/filter-picker',
	'handler/filter-transaction',
	'service/transaction-filter'
], function(
	angularMock,
	CommandBus,
	Observer,
	TransactionsCtrl,
	TransactionListCtrl,
	FilterPickerCtrl,
	FilterTransactionHandler,
	TransactionFilter
) {
	describe('Give a Filter picker and Transaction list', function() {
		var filterPickerCtrl,
			filterPickerScope,
			transCtrl,
			transScope,
			transListScope,
			transListCtrl;

		beforeEach(module('portfolio'));

		//////////////////////////////////
		// Inject angular controller //
		//////////////////////////////////
		beforeEach(inject(function(_$controller_) {
			filterPickerScope = {};
			transListScope = {
				$on: function(){
					
				}
			};
			transScope = {};
			filterPickerCtrl = _$controller_('FilterPickerCtrl', {
				$scope: filterPickerScope
			});
			transListCtrl = _$controller_('TransactionListCtrl', {
				$scope: transListScope
			});
			transCtrl = _$controller_('TransactionsCtrl', {
				$scope: transScope
			});
		}));

		describe('When a selection click', function() {
			beforeEach(function() {
				spyOn(filterPickerScope, 'handleSelectionClick').and.callFake(function() {
					CommandBus.execute('FilterTransaction', {
						date: 'this-month'
					});
				});
				spyOn(CommandBus, 'execute').and.callThrough();
				spyOn(FilterTransactionHandler, 'handle').and.callThrough();
				spyOn(TransactionFilter, 'update').and.callThrough();
				spyOn(Observer, 'publish').and.callThrough();
				spyOn(filterPickerCtrl, 'collapse').and.callThrough();
				spyOn(transCtrl, 'load').and.callThrough();
			});

			beforeEach(function() {
				filterPickerScope.handleSelectionClick();
			});

			it('then execute() in CommandBus should be called with FilterTransaction command', function() {
				expect(CommandBus.execute).toHaveBeenCalled();
				expect(CommandBus.execute).toHaveBeenCalledWith('FilterTransaction', {
					date: 'this-month'
				});
			});

			it('then FilterTransactionHandler should be handled command', function() {
				expect(FilterTransactionHandler.handle).toHaveBeenCalled();
			});

			it('then TransactionFilter should be updated date', function() {
				expect(TransactionFilter.update).toHaveBeenCalled();
				expect(TransactionFilter.update).toHaveBeenCalledWith('this-month');
			});

			it('then Observer should be published LoadTransaction message', function() {
				expect(Observer.publish).toHaveBeenCalled();
				expect(Observer.publish).toHaveBeenCalledWith('LoadTransactions');
			});

			// it('then FilterPickerCtrl collapse() should be called', function() {
			// 	expect(filterPickerCtrl.collapse).toHaveBeenCalled();
			// });

			it('then TransactionListCtrl load() should be called', function() {
				expect(transCtrl.load).toHaveBeenCalled();
			});
		});

	});

});