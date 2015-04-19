/* 
* @Author: ThanhCong
* @Date:   2015-04-11 17:35:55
* @Last Modified by:   ThanhCong
* @Last Modified time: 2015-04-11 20:22:02
*/

'use strict';

/* global define */

define([], function(){
	var Model = function(){

	};

	Model.prototype = {
		load: function(transactions) {
			this._model = transactions;
		}
	};

	return new Model();
});