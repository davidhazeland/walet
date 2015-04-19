/* 
 * @Author: ThanhCong
 * @Date:   2015-04-10 10:31:47
 * @Last Modified by:   ThanhCong
 * @Last Modified time: 2015-04-15 13:19:44
 */

'use strict';

/* global define */

define(['app', 'commandBus', 'observer'], function(app, CommandBus, Observer) {
    var Controller = function($scope, $routeParams) {
        var handleDateFilterChanged = function() {
            CommandBus.execute('ViewDashboard', {});
        }

        Observer.subscribe('DateFilterChanged', handleDateFilterChanged);

        $scope.$on('$destroy', function() {
            Observer.unsubscribe('DateFilterChanged', handleDateFilterChanged);
        });

        Observer.publish('Navigate', {
            page: 'dashboard'
        });
        CommandBus.execute('ViewDashboard', {});
    };

    app.controller('DashboardCtrl', ['$scope', '$routeParams', Controller]);

    return app;
});