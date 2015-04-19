/* 
 * @Author: ThanhCong
 * @Date:   2015-04-15 10:10:47
 * @Last Modified by:   ThanhCong
 * @Last Modified time: 2015-04-15 10:47:31
 */

'use strict';

/* global define */

define([
    'angularMock',
    'commandBus',
    'observer',
    'controller/transaction-list',
    'handler/load-transaction',
    'service/transactions'
], function(
    angularMock,
    CommandBus,
    Observer,
    TransactionListCtrl,
    LoadTransactionHandler,
    Transactions
) {
    describe('Give a Transaction list', function() {
        var transListScope,
            transListCtrl;

        beforeEach(module('portfolio'));

        //////////////////////////////////
        // Inject angular controller //
        //////////////////////////////////
        beforeEach(inject(function(_$controller_) {
            transListScope = {
                model: [{
                    name: 'lr',
                    date: new Date('2015/07/13')
                }],
                $on: function() {

                },
                $apply: function(){

                }
            };
            transListCtrl = _$controller_('TransactionListCtrl', {
                $scope: transListScope
            });
        }));

        describe('When load more button clicked', function() {
            var response = {
                success: true,
                data: {
                    items: [{
                        name: 'lr',
                        date: '2015/07/13'
                    }, {
                        name: 'ip',
                        date: '2015/07/13'
                    }]
                }
            };


            beforeEach(function() {
                spyOn(transListScope, 'handleLoadMoreBtnClick').and.callThrough();
                spyOn(CommandBus, 'execute').and.callThrough();
                spyOn(LoadTransactionHandler, 'handle').and.callThrough();
                spyOn(Transactions, 'load').and.callFake(function(param, callback) {
                    callback(response);
                });
                spyOn(Observer, 'publish').and.callThrough();
                // spyOn(transListCtrl, 'render');
            });

            beforeEach(function() {
                transListScope.handleLoadMoreBtnClick();
            });

            it('then LoadTransaction command should be executed', function() {
                expect(CommandBus.execute).toHaveBeenCalled();
                expect(CommandBus.execute).toHaveBeenCalledWith('LoadTransaction', jasmine.any(Object));
            });

            it('then LoadTransaction handler should be handled command', function() {
                expect(LoadTransactionHandler.handle).toHaveBeenCalled();
            });

            it('then Transactions service should be loaded transactions', function() {
                expect(Transactions.load).toHaveBeenCalled();
            });

            it('then Observer should be published TransactionsLoaded message', function() {
                expect(Observer.publish).toHaveBeenCalled();
                expect(Observer.publish).toHaveBeenCalledWith('TransactionsLoaded', response.data);
            });

            it('then Transacion list should be update model', function() {
                expect(transListScope.model).toEqual([{
                    name: 'lr',
                    date: new Date('2015/07/13')
                }, {
                    name: 'lr',
                    date: new Date('2015/07/13')
                }, {
                    name: 'ip',
                    date: new Date('2015/07/13')
                }])
            });
        });
    });
});