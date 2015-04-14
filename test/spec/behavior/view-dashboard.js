/* 
 * @Author: ThanhCong
 * @Date:   2015-04-11 23:25:57
 * @Last Modified by:   ThanhCong
 * @Last Modified time: 2015-04-13 10:37:34
 */

'use strict';

/* global define */

define([
		'angularMock',
		'commandBus',
		'observer',
		'controller/dashboard',
		'controller/tag-dashboard',
		'controller/compare-dashboard',
		'controller/overview',
		'handler/view-dashboard',
		'service/dashboard',
		'model/dashboard',
		'service/chart'
	],
	function(
		angularMock,
		CommandBus,
		Observer,
		DashboardCtrl,
		TagDashboardCtrl,
		CompareDashboardCtrl,
		OverviewCtrl,
		ViewDashboardHandler,
		Dashboard,
		DashboardModel,
		Chart) {
		describe('Give a Dashboard', function() {
			var dashboardScope,
				dashboardCtrl,
				tagDashboardScope,
				tagDashboardCtrl,
				compareDashboardScope,
				compareDashboardCtrl,
				overviewScope,
				overviewCtrl;

			beforeEach(module('portfolio'));

			//////////////////////////////////
			// Inject angular controller //
			//////////////////////////////////
			beforeEach(inject(function(_$controller_) {
				dashboardScope = {};
				tagDashboardScope = {};
				compareDashboardScope = {};
				overviewScope = {
					$apply: function() {

					}
				};
				dashboardCtrl = _$controller_('DashboardCtrl', {
					$scope: dashboardScope
				});
				tagDashboardCtrl = _$controller_('TagDashboardCtrl', {
					$scope: tagDashboardScope
				});
				compareDashboardCtrl = _$controller_('CompareDashboardCtrl', {
					$scope: compareDashboardScope
				});
				overviewCtrl = _$controller_('OverviewCtrl', {
					$scope: overviewScope
				});
			}));

			describe('When load() called', function() {
				var data = {
					tag: {
						name: 'tag'
					},
					compare: {
						name: 'compare'
					},
					overview: {
						name: 'overview'
					}
				};

				beforeEach(function() {
					spyOn(CommandBus, 'execute').and.callThrough();
					spyOn(ViewDashboardHandler, 'handle').and.callThrough();
					spyOn(Dashboard, 'fetch').and.callFake(function(callback) {
						callback(data);
					});
					spyOn(Chart, 'drawCompareChart').and.callFake(function() {

					});
					spyOn(DashboardModel, 'load').and.callThrough();
					spyOn(Observer, 'publish').and.callThrough();
				});

				beforeEach(function() {
					dashboardCtrl.load();
				});

				it('then execute() in CommandBus should be called with ViewDashboard command', function() {
					expect(CommandBus.execute).toHaveBeenCalled();
					expect(CommandBus.execute).toHaveBeenCalledWith('ViewDashboard', jasmine.any(Object));
				});

				it('then ViewDashboardHandler should be handled command', function() {
					expect(ViewDashboardHandler.handle).toHaveBeenCalled();
				});

				it('then getCompareData() should be called in Dashboard service', function() {
					expect(Dashboard.fetch).toHaveBeenCalled();
				});

				it('then should be loaded data into Dashboard model', function() {
					expect(DashboardModel.load).toHaveBeenCalled();
				});

				it('then Observer should be published CompareDashboardDrew message', function() {
					expect(Observer.publish).toHaveBeenCalled();
					expect(Observer.publish).toHaveBeenCalledWith('DashboardLoaded', jasmine.any(Object));
				});

				it('then TagDashboard scope should be equal right value', function() {
					expect(tagDashboardScope.data).toEqual({
						name: 'tag'
					});
				});

				it('then CompareDashboard scope should be equal right value', function() {
					expect(compareDashboardScope.data).toEqual({
						name: 'compare'
					});
				});

				it('then Overview should be called render()', function() {
					expect(overviewScope.overview).toEqual({
						name: 'overview'
					});
				});
			});

		});
	});