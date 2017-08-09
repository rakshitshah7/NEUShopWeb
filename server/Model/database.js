var mongoose = require("mongoose");
var q= require("q");

var connectionString = 'mongodb://localhost/neutailor';
var db = mongoose.connect(connectionString);

mongoose.Promise = q.Promise;

module.exports = db;