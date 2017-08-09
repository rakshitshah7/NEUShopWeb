
var mongoose = require("mongoose");
var userSchema = mongoose.Schema({
        firstname: String,
        lastname: String,
        username: String,
        password: String
    }, {collection: "user"});

module.exports =  userSchema;