module.exports = function() {
    console.log("Hello from Mongoose!!");

    var mongoose = require("mongoose");
    var q = require("q");
//Getting the schema
    var userSchema = require("./user.schema.server.js")();
//Creating the model of the mongodb
    var User = mongoose.model("user", userSchema);

    var api = {
        createUser : createUser,
        findUserByUsername: findUserByUsername,
        findUserByCredentials: findUserByCredentials
    };
    return api;

    function findUserByCredentials(userName) {
        var deferred = q.defer();

        User.findOne(
            {username: userName},
            function (err, stats) {
                if (!err) {
                    deferred.resolve(stats);
                }
                else {
                    deferred.reject(err);
                }
            });
        return deferred.promise;
    }

    function createUser(userDetails) {
        //async function callback-based instead of promise-based
        var users = {
            username: userDetails.username.$viewValue, password: userDetails.password.$viewValue,
            firstname: userDetails.firstName.$viewValue, lastname: userDetails.lastName.$viewValue
        }


        var deferred = q.defer();
        User.create(users, function (err, doc) {
            if (err) {
                deferred.reject(err);
            }
            else {
                console.log(doc);
            }
        });

        return deferred.promise;
    }

    function findUserByUsername(userName) {
        var deferred = q.defer();

        User.findOne(
            {"username": userName},
            function (err, status) {
                if (!err) {
                    console.log("model success" + userName);
                    console.log(status);
                    deferred.resolve(status);

                }
                else {
                    deferred.reject(err);
                }
            });
        return deferred.promise;
    }

    function updateUser(currentUsername, userDetails) {
        var deferred = q.defer();
        User.update(
            {"username": currentUsername},
            {
                $set: {
                    //"username":userDetails.username,
                    "password": userDetails.password,
                    "firstname": userDetails.firstname,
                    "lastname": userDetails.lastname,
                    "email": userDetails.email
                }
            },
            function (err, stats) {
                if (!err) {
                    deferred.resolve(stats);
                }
                else {
                    deferred.reject(err);
                }
            });
        return deferred.promise;
    }

};