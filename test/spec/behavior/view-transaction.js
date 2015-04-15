'use strict';

/* global define, describe, it, expect */

define([
		'angularMock',
		'commandBus',
		'observer',
		'controller/transaction-list',
		'controller/transaction-detail',
		'handler/view-transaction',
		'service/transactions'
	],
	function(
		angularMock,
		CommandBus,
		Observer,
		TransactionListCtrl,
		TransactionDetailCtrl,
		ViewTransactionHandler,
		Transactions) {
		describe('Give a Transaction list view', function() {
			var transListScope,
				transDetailScope,
				transListCtrl,
				transDetailCtrl;

			beforeEach(module('portfolio'));

			//////////////////////////////////
			// Inject angular controller //
			//////////////////////////////////
			beforeEach(inject(function(_$controller_) {
				transListScope = {
					$on: function(event, callback){
						callback();
					}
				};
				transDetailScope = {
					$on: function(event, callback){
						callback();
					}
				};
				transListCtrl = _$controller_('TransactionListCtrl', {
					$scope: transListScope
				});
				transDetailCtrl = _$controller_('TransactionDetailCtrl', {
					$scope: transDetailScope
				});
			}));

			describe('When a transaction item clicked', function() {
				/**
				 * Transaction model sample
				 * @type {Object}
				 */
				var data = {
					name: 'Lorem Ipsum',
					amount: 100,
					tag: 'lr',
					date: '13/7/2015'
				}

				//////////////////////
				// spy function //
				//////////////////////
				beforeEach(function() {
					spyOn(transListScope, 'handleItemClick').and.callThrough();
					spyOn(Observer, 'publish').and.callThrough();
				});

				beforeEach(function() {
					transListScope.handleItemClick(data);
				});

				it('Observer should be pushlished RenderTransactionDetail message with item', function() {
					expect(Observer.publish).toHaveBeenCalled();
					expect(Observer.publish).toHaveBeenCalledWith('RenderTransactionDetail', data);
				});
				it('then TransactionDetail scope should be equal data', function() {
					expect(transDetailScope.item).toEqual(data);
				});
				it('then should be show Transaction detail popup', function(){
					expect(transDetailScope.visibility).toEqual(true);
				});
			});
		});
	});