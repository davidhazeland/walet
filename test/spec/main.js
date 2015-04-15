'use strict';

/* global require, jasmine */

require([
	'jquery',
	// 'spec/behavior/index',
	'spec/filter/index'
	], 
function($) {
    // Run all the loaded test specs.
    $(document).ready(function(){
    	jasmine.getEnv().execute();
    });
});
