module.exports = function() {

    var db = require('./database');
    var mongoose = require("mongoose");
    var q = require("q");
    //Getting the schema
    var userSchema = require("./product.schema.server.js")();
    //Creating the model of the mongodb
    var Product = mongoose.model("product", productSchema);

    var api = {
        createProduct : createProduct,
        findProductByProductId: findProductByProductId,
        findUserByCredentials: findUserByCredentials,
        findUserById: findUserById,
        deleteUser : deleteUser


    };
    return api;




    function createProduct(product) {
        return Product.create(product);
    }

    function findUserById(productId) {
        return Product.findById(productId);
    }

    function findProductByProductId(productId) {
        return Product.findOne({productId: productId});
    }


    function updateproduct(productId, user) {
        delete user._id;
        return User
            .update(
                {_id: userId},
                {$set: user}
            );
    }

    function deleteUser(userId) {
        return Product.remove({_id: userId});
    }


    // function createUser(users) {
    //
    //
    //
    //     var deferred = q.defer();
    //     User.create(users, function (err, doc) {
    //         if (err) {
    //             deferred.reject(err);
    //         }
    //         else {
    //             console.log(doc);
    //         }
    //     });
    //
    //     return deferred.promise;
    // }
    //
    // function findUserByUsername(userName) {
    //     var deferred = q.defer();
    //
    //     User.findOne(
    //         {"username": userName},
    //         function (err, status) {
    //             if (!err) {
    //                 console.log("model success" + userName);
    //                 console.log(status);
    //                 deferred.resolve(status);
    //
    //             }
    //             else {
    //                 deferred.reject(err);
    //             }
    //         });
    //     return deferred.promise;
    // }
    //
    // function updateUser(currentUsername, userDetails) {
    //     var deferred = q.defer();
    //     User.update(
    //         {"username": currentUsername},
    //         {
    //             $set: {
    //                 //"username":userDetails.username,
    //                 "password": userDetails.password,
    //                 "firstname": userDetails.firstname,
    //                 "lastname": userDetails.lastname,
    //                 "email": userDetails.email
    //             }
    //         },
    //         function (err, stats) {
    //             if (!err) {
    //                 deferred.resolve(stats);
    //             }
    //             else {
    //                 deferred.reject(err);
    //             }
    //         });
    //     return deferred.promise;
    // }

};