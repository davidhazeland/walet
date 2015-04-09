/* 
 * @Author: ThanhCong
 * @Date:   2015-04-09 10:33:40
 * @Last Modified by:   ThanhCong
 * @Last Modified time: 2015-04-09 11:02:06
 */

'use strict';

/* global define */

define([
		'angularMock',
		'commandBus',
		'observer',
		'controller/tag-dashboard',
		'handler/view-tag-dashboard',
		'service/dashboard',
		'service/chart'
	],
	function(
		angularMock,
		CommandBus,
		Observer,
		TagDashboardCtrl,
		ViewTagDashboardHandler,
		Dashboard,
		Chart) {
		describe('Give a Tag dashboard', function() {
			var tagDashboardScope,
				tagDashboardCtrl;

			beforeEach(module('portfolio'));

			//////////////////////////////////
			// Inject angular controller //
			//////////////////////////////////
			beforeEach(inject(function(_$controller_) {
				tagDashboardScope = {};
				tagDashboardCtrl = _$controller_('TagDashboardCtrl', {
					$scope: tagDashboardScope
				});
			}));

			describe('When load() called', function() {
				beforeEach(function() {
					spyOn(CommandBus, 'execute').and.callThrough();
					spyOn(ViewTagDashboardHandler, 'handle').and.callThrough();
					spyOn(Dashboard, 'getTagData').and.callFake(function(callback) {
						callback();
					});
					spyOn(Chart, 'drawTagChart').and.callThrough();
					spyOn(Observer, 'publish').and.callThrough();
					spyOn(tagDashboardCtrl, 'render').and.callThrough();
				});

				beforeEach(function() {
					tagDashboardCtrl.load();
				});

				it('then execute() in CommandBus should be called with ViewTagDashboard command', function() {
					expect(CommandBus.execute).toHaveBeenCalled();
				});

				it('then ViewTagDashboardHandler should be handled command', function() {
					expect(ViewTagDashboardHandler.handle).toHaveBeenCalled();
				});

				it('then getTagData() should be called in Dashboard service', function() {
					expect(Dashboard.getTagData).toHaveBeenCalled();
				});

				it('then drawTagChart() should be called in Chart service', function() {
					expect(Chart.drawTagChart).toHaveBeenCalled();
				});

				it('then Observer should be published TagDashboardDrew message', function() {
					expect(Observer.publish).toHaveBeenCalled();
					expect(Observer.publish).toHaveBeenCalledWith('TagDashboardDrew', jasmine.any(Object));
				});

				it('then TagDashboardCtrl should be called render()', function() {
					expect(tagDashboardCtrl.render).toHaveBeenCalled();
				});
			});
		});
	});