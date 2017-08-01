module.exports = function (app) {
    console.log("in server side");
    require("./services/user.service.server.js")(app);

}