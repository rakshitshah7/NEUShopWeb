module.exports = function () {
    var mongoose = require("mongoose");
    var productSchema = mongoose.Schema({
    {   productID: String,
        productName: String,
        description: String,
        img: { data: Buffer, contentType: String },
        edition: String,
        color:String,
        styleNo:String,
        costPrice:String,
        sellingPrice:String }
    }, {collection: "product"});

    return productSchema;
};