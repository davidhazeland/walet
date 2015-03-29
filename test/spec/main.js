'use strict';

/* global require, jasmine */

require(['spec/test'], 
function() {
    // Run all the loaded test specs.
    jasmine.getEnv().execute();
});
