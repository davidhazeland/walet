'use strict';

/* global require */

require.config({
    baseUrl: 'scripts',
    shim: {
        angular: {
            exports: 'angular'
        },
        angularMock: {
            deps: ['angularjs']
        },
        templates : {
            deps: ['app']
        }
    },
    paths: {
        spec: '../../spec',
        angular: '../../bower_components/angular/angular.min',
        angularMock: '../../bower_components/angular-mocks/angular-mocks',
        jquery: '../../bower_components/jquery/dist/jquery.min',
        chartjs: '../../bower_components/chartjs/Chart.min'
    }
});
