/* 
* @Author: ThanhCong
* @Date:   2015-03-29 23:41:02
* @Last Modified by:   ThanhCong
* @Last Modified time: 2015-04-04 17:39:22
*/
'use strict';

/* global require */

require([
	'angular', 
	'templates', 
	'filter/index', 
	'controller/index', 
	'directive/index'
	], function(angular) {
	angular.bootstrap(document, ['portfolio']);
});
