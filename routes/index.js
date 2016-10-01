'use strict';

var express = require('express');
var router = express.Router();

module.exports = function(config) {
    
    // define the home page route
    router.get('/',(req, res) => {
        res.send('Hello World!');
    } );

    router.use('/recipes', require('./recipes')(config));

    //catch all 404 error route
    router.all('*', (req, res, next) => {
        console.log('Bad Path: ', req);
        var err = new Error('Path not found');
        err.status = 404;
        return next(err);
    });

    return router;
};