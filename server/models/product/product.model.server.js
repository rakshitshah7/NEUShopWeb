module.exports = function() {

    // var db = require('./database');
    var mongoose = require("mongoose");
    var q = require("q");
    //Getting the schema
    var productSchema = require("./product.schema.server.js")();
    //Creating the model of the mongodb
    var Product = mongoose.model("product", productSchema);

    var api = {
        getProducts : getProducts,
        saveProduct : saveProduct,
        getProductById : getProductById


    };
    return api;




    function getProducts() {
        return Product.find();
    }

    function saveProduct(product) {
        return Product.create(product);
    }

    function getProductById(productId) {
        return Product.findById(productId);
    }





};