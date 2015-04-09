/* 
* @Author: ThanhCong
* @Date:   2015-04-09 11:03:27
* @Last Modified by:   ThanhCong
* @Last Modified time: 2015-04-09 11:04:48
*/

'use strict';

/* global define */

define([
		'angularMock',
		'commandBus',
		'observer',
		'controller/compare-dashboard',
		'handler/view-compare-dashboard',
		'service/dashboard',
		'service/chart'
	],
	function(
		angularMock,
		CommandBus,
		Observer,
		CompareDashboardCtrl,
		ViewCompareDashboardHandler,
		Dashboard,
		Chart) {
		describe('Give a Compare dashboard', function() {
			var compareDashboardScope,
				compareDashboardCtrl;

			beforeEach(module('portfolio'));

			//////////////////////////////////
			// Inject angular controller //
			//////////////////////////////////
			beforeEach(inject(function(_$controller_) {
				compareDashboardScope = {};
				compareDashboardCtrl = _$controller_('CompareDashboardCtrl', {
					$scope: compareDashboardScope
				});
			}));

			describe('When load() called', function() {
				beforeEach(function() {
					spyOn(CommandBus, 'execute').and.callThrough();
					spyOn(ViewCompareDashboardHandler, 'handle').and.callThrough();
					spyOn(Dashboard, 'getCompareData').and.callFake(function(callback) {
						callback();
					});
					spyOn(Chart, 'drawCompareChart').and.callThrough();
					spyOn(Observer, 'publish').and.callThrough();
					spyOn(compareDashboardCtrl, 'render').and.callThrough();
				});

				beforeEach(function() {
					compareDashboardCtrl.load();
				});

				it('then execute() in CommandBus should be called with ViewCompareDashboard command', function() {
					expect(CommandBus.execute).toHaveBeenCalled();
				});

				it('then ViewCompareDashboardHandler should be handled command', function() {
					expect(ViewCompareDashboardHandler.handle).toHaveBeenCalled();
				});

				it('then getCompareData() should be called in Dashboard service', function() {
					expect(Dashboard.getCompareData).toHaveBeenCalled();
				});

				it('then drawCompareChart() should be called in Chart service', function() {
					expect(Chart.drawCompareChart).toHaveBeenCalled();
				});

				it('then Observer should be published CompareDashboardDrew message', function() {
					expect(Observer.publish).toHaveBeenCalled();
					expect(Observer.publish).toHaveBeenCalledWith('CompareDashboardDrew', jasmine.any(Object));
				});

				it('then CompareDashboardCtrl should be called render()', function() {
					expect(compareDashboardCtrl.render).toHaveBeenCalled();
				});
			});
		});
	});