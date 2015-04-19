/* 
 * @Author: ThanhCong
 * @Date:   2015-04-08 16:19:27
 * @Last Modified by:   ThanhCong
 * @Last Modified time: 2015-04-13 10:27:12
 */

'use strict';

/* global define */

define([
    'angularMock',
    'commandBus',
    'observer',
    'controller/transactions',
    'controller/search-transaction',
    'handler/search-transaction',
    'service/transaction-search'
], function(
    angularMock,
    CommandBus,
    Observer,
    TransactionsCtrl,
    SearchTransactionCtrl,
    SearchTransactionHandler,
    TransactionSearch
) {
    describe('Give a Search box and Transaction list', function() {
        var searchTransCtrl,
            searchTransScope,
            transScope,
            transCtrl,
            searchTransElement;

        beforeEach(module('portfolio'));

        //////////////////////////////////
        // Inject angular controller //
        //////////////////////////////////
        beforeEach(inject(function(_$controller_) {
            searchTransScope = {
            	$on: function(){

            	}
            };
            searchTransElement = {};
            transScope = {
            	$on: function(){
            		
            	}
            };
            searchTransCtrl = _$controller_('SearchTransactionCtrl', {
                $scope: searchTransScope,
                $element: {
                    find: function() {

                    }
                }
            });
            transCtrl = _$controller_('TransactionsCtrl', {
                $scope: transScope
            });
        }));

        describe('When search box submit', function() {
            beforeEach(function() {
                spyOn(searchTransScope, 'handleSearchBoxKeyUp').and.callFake(function() {
                    CommandBus.execute('SearchTransaction', {
                        term: 'lr'
                    });
                });
                spyOn(CommandBus, 'execute').and.callThrough();
                spyOn(SearchTransactionHandler, 'handle').and.callThrough();
                spyOn(TransactionSearch, 'update').and.callThrough();
                spyOn(Observer, 'publish').and.callThrough();
                // spyOn(transCtrl, 'load').and.callThrough();
            });

            beforeEach(function() {
                searchTransScope.handleSearchBoxKeyUp();
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

            // it('then TransactionListCtrl load() should be called', function() {
            //     expect(transCtrl.load).toHaveBeenCalled();
            // });
        });

    });

});