/* 
 * @Author: ThanhCong
 * @Date:   2015-04-08 16:19:27
 * @Last Modified by:   ThanhCong
 * @Last Modified time: 2015-04-08 16:41:26
 */

'use strict';

/* global define */

define([
	'angularMock',
	'commandBus',
	'observer',
	'controller/transaction-list',
	'controller/search-transaction',
	'handler/search-transaction',
	'service/transaction-search'
], function(
	angularMock,
	CommandBus,
	Observer,
	TransactionListCtrl,
	SearchTransactionCtrl,
	SearchTransactionHandler,
	TransactionSearch
) {
	describe('Give a Search box and Transaction list', function() {
		var searchTransCtrl,
			searchTransScope,
			transListScope,
			transListCtrl;

		beforeEach(module('portfolio'));

		//////////////////////////////////
		// Inject angular controller //
		//////////////////////////////////
		beforeEach(inject(function(_$controller_) {
			searchTransScope = {};
			transListScope = {};
			searchTransCtrl = _$controller_('SearchTransactionCtrl', {
				$scope: searchTransScope
			});
			transListCtrl = _$controller_('TransactionListCtrl', {
				$scope: transListScope
			});
		}));

		describe('When search box submit', function() {
			beforeEach(function() {
				spyOn(searchTransScope, 'handleSearchBoxSubmit').and.callFake(function() {
					CommandBus.execute('SearchTransaction', {
						term: 'lr'
					});
				});
				spyOn(CommandBus, 'execute').and.callThrough();
				spyOn(SearchTransactionHandler, 'handle').and.callThrough();
				spyOn(TransactionSearch, 'update').and.callThrough();
				spyOn(Observer, 'publish').and.callThrough();
				spyOn(transListCtrl, 'load').and.callThrough();
			});

			beforeEach(function() {
				searchTransScope.handleSearchBoxSubmit();
			});

			it('then execute() in CommandBus should be called with SearchTransaction command', function() {
				expect(CommandBus.execute).toHaveBeenCalled();
				expect(CommandBus.execute).toHaveBeenCalledWith('SearchTransaction', {
					term: 'lr'
				});
			});

			it('then SearchTransactionHandler should be handled command', function() {
				expect(SearchTransactionHandler.handle).toHaveBeenCalled();
			});

			it('then TransactionSearch should be updated term', function() {
				expect(TransactionSearch.update).toHaveBeenCalled();
				expect(TransactionSearch.update).toHaveBeenCalledWith('lr');
			});

			it('then Observer should be published LoadTransaction message', function() {
				expect(Observer.publish).toHaveBeenCalled();
				expect(Observer.publish).toHaveBeenCalledWith('LoadTransactions');
			});

			it('then TransactionListCtrl load() should be called', function() {
				expect(transListCtrl.load).toHaveBeenCalled();
			});
		});

	});

});