module.exports = function () {


    var models = {
        userModelProject : require("./user/user.model.server")(),
        productModelProject: require("./product/product.model.server")()
    };

    return models;
};