/* 
 * @Author: ThanhCong
 * @Date:   2015-04-09 14:42:26
 * @Last Modified by:   ThanhCong
 * @Last Modified time: 2015-04-09 16:45:36
 */

'use strict';

/* global define */

define([
	'angularMock',
	'service/transaction-RESTful'
], function(
	angularMock,
	TransactionRESTful
) {
	describe('Give a Transaction RESTful service', function() {
		beforeEach(module('portfolio'));

		beforeEach(function(){
			TransactionRESTful.get({
				type: 'income',
				filter: '',
				search: ''
			}).success(function(response){
				console.log(response);
			});
		});

		it('TransactionRESTful should be defined', function() {
			expect(TransactionRESTful).toBeDefined();
		});
	});
});