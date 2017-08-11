module.exports = function () {
    var mongoose = require("mongoose");
    var orderSchema = mongoose.Schema({
        date: String,
        subtotal : String,
        user : [{type: mongoose.Schema.Types.ObjectId, ref: 'ClientUser'}],
        product : [{type: mongoose.Schema.Types.ObjectId, ref: 'ProductUser'}]
    }, {collection: "order.user"});

    return orderSchema;
};