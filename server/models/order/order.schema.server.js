module.exports = function () {
    var mongoose = require("mongoose");
    var orderSchema = mongoose.Schema({
        orderDateTime: Date,
        total : String,
        qty : [String],
        user : {type: mongoose.Schema.Types.ObjectId, ref: 'ClientUser'},
        product : [{type: mongoose.Schema.Types.ObjectId, ref: 'ProductUser'}]
    }, {collection: "order.user"});

    return orderSchema;
};