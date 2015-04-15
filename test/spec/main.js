'use strict';

/* global require, jasmine */

require([
	'jquery',
	'spec/core/index'
	], 
function($) {
    // Run all the loaded test specs.
    $(document).ready(function(){
    	jasmine.getEnv().execute();
    });
});
