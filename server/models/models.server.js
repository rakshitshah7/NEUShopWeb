module.exports = function () {


    var models = {
        userModelProject : require("./user/user.model.server")(),
        productModelProject : require("./product.model.server")()
    };

    return models;
};