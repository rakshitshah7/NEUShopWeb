console.log("Hello from Mongoose!!");
var mongoose = require("mongoose");
var q = require("q");

//get the db
var db = require('./database');

//Getting the schema
var userSchema=require("./user.schema.server.js");

//Creating the model of the mongodb
var User = mongoose.model("user",userSchema);

User.createNewUser = createNewUser;
User.findUserByCredentials = findUserByCredentials;
User.findUserByUsername = findUserByUsername;
module.exports = User;

// createNewUser({username :"Vishal" , lastname: "Diyora" , firstname :"Vishal6557" , password : "1234567"})
// findUserByUsername("Vishal").then(function(users){
// if(users) {
//     console.log(users);
// }else{
//     console.log("no user found");
// }
// });

// updateUser("vishal",{lastname:"diyora",password :"12345", firstname : "vvvvv"}).then(function(status){
//     console.log(status)
// })


function findUserByCredentials(userName) {
    var deferred= q.defer();

    User.findOne (
        {username : userName},
        function (err, stats) {
            if(!err){
                deferred.resolve(stats);
            }
            else{
                deferred.reject(err);
            }
        } );
    return deferred.promise;
}

function createNewUser(userDetails) {
    //async function callback-based instead of promise-based
    var users = { username : userDetails.username.$viewValue, password : userDetails.password.$viewValue ,
        firstname : userDetails.firstName.$viewValue, lastname :  userDetails.lastName.$viewValue}


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
function findUserByUsername(userName){
    var deferred= q.defer();

    User.findOne (
         {"username": userName},
        function (err, status) {
            if(!err){
                console.log("model success" + userName);
                console.log(status);
                deferred.resolve(status);

            }
            else{
                deferred.reject(err);
            }
        } );
    return deferred.promise;
}

function updateUser (currentUsername, userDetails) {
    var deferred= q.defer();
    User.update (
        {"username": currentUsername},
        {$set: {
            //"username":userDetails.username,
            "password":userDetails.password,
            "firstname":userDetails.firstname,
            "lastname":userDetails.lastname,
            "email":userDetails.email
        }},
        function (err, stats) {
            if(!err){
                deferred.resolve(stats);
            }
            else{
                deferred.reject(err);
            }
        } );
    return deferred.promise;
}


//
//
// User.create({username:'vishal'}, function(err,doc){
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(doc);
//     }
// })