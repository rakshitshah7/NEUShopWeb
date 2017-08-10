module.exports = function () {


    var models = {
        userModelProject : require("./user/user.model.server")()
    };

    return models;
};