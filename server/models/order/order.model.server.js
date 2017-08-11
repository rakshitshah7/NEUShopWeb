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
        saveUserOrder: saveUserOrder,



    };
    return api;




    function getUserOrders(product) {
        var order={
            user : req.params.userId,
            product : req.params.productId
        }


        return Order.create(order);
    }

    function cancelUserOrder(productId) {

        return Order.findById(productId);
    }

    function saveUserOrder() {
        r
    }



};