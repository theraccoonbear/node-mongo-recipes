'use strict';

var models = require('../models/index');

module.exports = function() {
	var controller = {
		seed: (cb) => {
			cb(null, {success: true});
		},
	
		getAll: (cb) => {
			cb(null, {success: true});
		}
	};
	
	return controller;
};


