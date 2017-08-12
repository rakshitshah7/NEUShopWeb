module.exports = function() {

    console.log("hello to order");

    var mongoose = require("mongoose");
    var q = require("q");

    //Getting the schema
    var orderSchema = require("./order.schema.server.js")();

    //Creating the model of the mongodb
    var Order = mongoose.model("OrderUser", orderSchema);

    var api = {
        getUserOrders : getUserOrders,
        cancelUserOrder : cancelUserOrder,
        saveUserOrder: saveUserOrder
    };
    return api;


function createOrder(userId){
    var user = {user:userId}
    console.log(user);
    return Order.create(user);
}

    function saveUserOrder(userId,productId) {
        var splitproduct = productId.split(",")

        var deferred = q.defer();

        createOrder(userId)
            .then(function (order) {
                Order
                    .findById(order._id, function(err,order){
                        if(err) {

                            deferred.abort(err);

                        } else {

                            for (var i = 0; i < splitproduct.length; i++) {
                                order.products.push(splitproduct[i]);
                            }
                            order.save();
                            deferred.resolve(order);
                        }
            })
    })
        return deferred.promise;
    }


    function getUserOrders(userId) {
        var deferred = q.defer();
            Order
                .find({user:userId}, function (err, order) {
                    if(err) {
                        deferred.abort(err);
                    } else
                        {
                            deferred.resolve(order);
                        }
               })
    return deferred.promise;
    }

    function cancelUserOrder(orderId) {

        var deferred = q.defer();
        Order
            .remove({_id: orderId}, function (err, order) {
            if(err) {
                deferred.abort(err);
            } else {
                deferred.resolve(order);
            }
        });
        return deferred.promise;
    }






};