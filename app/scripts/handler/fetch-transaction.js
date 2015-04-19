/* 
 * @Author: ThanhCong
 * @Date:   2015-04-08 09:51:08
 * @Last Modified by:   ThanhCong
 * @Last Modified time: 2015-04-15 10:34:17
 */

'use strict';

/* global define */

define(['observer', 'service/transactions', 'model/transactions', 'service/transaction-type'],
    function(observer, Transactions, TransactionsModel, TransactionType) {
        var handler = function() {

        }

        handler.prototype = {
            handle: function(data) {
                if (data.type) {
                    TransactionType.update(data.type);
                }
                Transactions.fetch(this.fetchTransactionsCallback);
            },

            fetchTransactionsCallback: function(response) {
                if (response.success) {
                    var transactions = response.data;
                    TransactionsModel.load(transactions);
                    observer.publish('TransactionsFetched', transactions);
                }
            }
        };

        return new handler();
    });