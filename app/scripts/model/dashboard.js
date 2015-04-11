/* 
* @Author: ThanhCong
* @Date:   2015-04-11 23:45:38
* @Last Modified by:   ThanhCong
* @Last Modified time: 2015-04-11 23:45:49
*/

'use strict';

/* global define */

define([], function(){
	var Model = function(){

	};

	Model.prototype = {
		load: function(data) {
			this._model = data;
		}
	};

	return new Model();
});