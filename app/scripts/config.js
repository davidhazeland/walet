/* 
* @Author: ThanhCong
* @Date:   2015-03-29 23:41:01
* @Last Modified by:   ThanhCong
* @Last Modified time: 2015-04-04 17:39:19
*/
'use strict';

/* global require */

require.config({
    baseUrl: 'scripts',
    shim: {
        angular: {
            exports: 'angular'
        },
        angularMock: {
            deps: ['angular']
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
