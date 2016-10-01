'use strict';

var express = require('express');

module.exports = function(config) {

    var router = express.Router();
    var recipesController = require('../controllers/recipes')(config);

    // lift options query
    router.get('/list', (req, res, next) => {
        accountsController.getAll((err, accounts) => {
            if (err) return next(err);
            return res.json(accounts);
        });
    })
	.get('/seed', (req, res, next) => {
		accountsController.seed((err, accounts) => {
			if (err) { return next(err); }
			return res.json({});
		});
	});

    return router;
};