/* 
 * @Author: ThanhCong
 * @Date:   2015-04-15 14:16:20
 * @Last Modified by:   ThanhCong
 * @Last Modified time: 2015-04-15 16:21:01
 */

'use strict';

/* global define */

define([
		'angularMock',
		'commandBus',
		'observer',
		'controller/overview',
		'controller/tag-dashboard',
		'service/chart',
		'directive/tag-dashboard'
	],
	function(
		angularMock,
		CommandBus,
		Observer,
		OverviewCtrl,
		TagDashboardCtrl,
		Chart) {
		describe('Give a Tag dashboard and Overview', function() {
			var compile,
				rootScope;

			var overviewScope,
				overviewCtrl,
				tagDashboardScope,
				tagDashboardCtrl;

			beforeEach(module('portfolio'));

			//////////////////////////////////
			// Inject angular controller //
			//////////////////////////////////
			beforeEach(inject(function(_$controller_, _$compile_, _$rootScope_) {
				overviewScope = {
					$apply: function() {

					},
					$on: function() {
						
					}
				};
				overviewCtrl = _$controller_('OverviewCtrl', {
					$scope: overviewScope
				});
				compile = _$compile_;
				rootScope = _$rootScope_;
			}));

			describe('When transaction type dashboard changed', function() {
				beforeEach(function() {
					spyOn(Observer, 'publish').and.callThrough();
					spyOn(Chart, 'drawTagChart').and.callThrough().and.callFake(function() {

					});
				});

				beforeEach(function() {
					var element = compile("<tag-dashboard></tag-dashboard>")(rootScope);
					//rootScope.$digest();
					overviewScope.handleTypeChange('income');
				});

				it('then Observer should be published TransactionTypeChanged message and income param', function(){
					expect(Observer.publish).toHaveBeenCalled();
					expect(Observer.publish).toHaveBeenCalledWith('TransactionTypeChanged', {
						type: 'income'
					});
				});

				// it('then Tag dashboard should be redraw with income data', function(){
				// 	expect(Chart.drawTagChart).toHaveBeenCalled();
				// });
			});
		});
	});