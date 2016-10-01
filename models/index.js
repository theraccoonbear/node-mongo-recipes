'use strict';

var mongoose = require('mongoose');
//DB setup
mongoose.connect("mongodb://mongo:27017");

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("We're connected to Mongo");
});

var fs = require("fs");
var path = require("path");

fs
	.readdirSync(__dirname)
	.filter(function(file) {
		return (file.indexOf(".") !== 0) && (file !== "index.js");
	})
	.forEach(function(file) {
		var fullpath = path.join(__dirname, file);
		console.log(file, fullpath);
	});

module.exports = db;