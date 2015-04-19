/* 
 * @Author: ThanhCong
 * @Date:   2015-04-15 19:18:53
 * @Last Modified by:   ThanhCong
 * @Last Modified time: 2015-04-15 19:31:04
 */

'use strict';

/* global define */


define([
		'angularMock',
		'filter/amount'
	],
	function(
		angularMock,
		AmountFilter
	) {
		describe('Give a amount filter', function() {

			beforeEach(module('portfolio'));

			//////////////////////////////////
			// Inject angular controller //
			//////////////////////////////////
			it('Should be format transaction money', function() {
				inject(function(amountFilter) {
					expect(amountFilter(1000, 'income')).toEqual('+ 1000$')
					expect(amountFilter(2000, 'expense')).toEqual('- 2000$')
				});
			})
		});
	});