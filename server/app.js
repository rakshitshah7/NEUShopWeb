module.exports = function (app) {
    console.log("in server side");

    var models = require("./models/models.server")();

    require("./services/user.service.server.js")(app, models);

}