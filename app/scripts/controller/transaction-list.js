/* 
 * @Author: ThanhCong
 * @Date:   2015-04-04 17:33:45
 * @Last Modified by:   ThanhCong
 * @Last Modified time: 2015-04-15 19:55:32
 */

'use strict';

/* global define */

define(['app', 'commandBus', 'observer'], function(app, CommandBus, Observer) {
    var Controller = function($scope) {
        // Observer register

        var handleTransactionsFetched = function(data) {
                for (var i = 0; i < data.items.length; i++) {
                    data.items[i].date = new Date(data.items[i].date);
                };
                $scope.model = data.items;
                $scope.$apply();
            },

            handleTransactionsLoaded = function(data) {
                data = data.items;
                for (var i = 0; i < data.length; i++) {
                    data[i].date = new Date(data[i].date);
                    $scope.model.push(data[i]);
                };
                $scope.$apply();
            },

            handleTransactionAdded = function(data) {
                if ($scope.type == data.type) {
                    $scope.model.push(data);
                    $scope.$apply();
                }
            },

            handleTransactionSaved = function(data) {
                for (var i = 0; i < $scope.model.length; i++) {
                    if ($scope.model[i].id == data.id) {
                        $scope.model[i] = data;
                        break;
                    }
                }
                $scope.$apply();
            },

            handleTransactionDeleted = function(data) {
                for (var i = 0; i < $scope.model.length; i++) {
                    if ($scope.model[i].id == data.id) {
                        $scope.model.splice(i, 1);
                        break;
                    }
                }
                $scope.$apply();
            };

        Observer.subscribe('TransactionsFetched', handleTransactionsFetched);
        Observer.subscribe('TransactionsLoaded', handleTransactionsLoaded);
        Observer.subscribe('TransactionAdded', handleTransactionAdded);
        Observer.subscribe('TransactionSaved', handleTransactionSaved);
        Observer.subscribe('TransactionDeleted', handleTransactionDeleted);

        // Destroy observer
        $scope.$on('$destroy', function() {
            Observer.unsubscribe('TransactionsFetched', handleTransactionsFetched);
            Observer.unsubscribe('TransactionsLoaded', handleTransactionsLoaded);
            Observer.unsubscribe('TransactionAdded', handleTransactionAdded);
            Observer.unsubscribe('TransactionSaved', handleTransactionSaved);
            Observer.unsubscribe('TransactionDeleted', handleTransactionDeleted);
        });

        // Scope handler
        $scope.handleItemClick = function(item) {
            Observer.publish('RenderTransactionDetail', angular.copy(item));
        };
        $scope.handleLoadMoreBtnClick = function() {
            CommandBus.execute('LoadTransaction', {
                length: $scope.model.length
            });
        };
    };

    app.controller('TransactionListCtrl', ['$scope', Controller]);

    return Controller;
});