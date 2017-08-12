

module.exports = function (app, models) {
    var orderModelProject = models.orderModelProject;


    app.get('/api/project/userOrders/:userId', getUserOrders);
    app.post("/api/project/saveUserOrder/:userId/product/:productId",saveUserOrder);
    app.post("/api/project/cancelOrder/:orderId", cancelUserOrder);



    function saveUserOrder(req,res){
        // var product = req.body;
        orderModelProject
            .saveUserOrder(req.params.userId,req.params.productId)
            .then(function(order) {
                res.json(order);
            }, function (err) {
                    res.sendStatus(500).send(err);
                });
    }

    function cancelUserOrder(req,res){
        orderModelProject
            .cancelUserOrder(req.params.orderId)
            .then(function (order) {
                res.send(order);
            }, function (err) {
                res.sendStatus(500).send(err);
            });

    }

    function getUserOrders(req, res) {
        var userId = req.params.userId;
        // var product = req.id;
        orderModelProject
            .getUserOrders(userId)
            .then(
                function(product){
                    res.send(product);
                }, function (err) {
                    res.sendStatus(500).send(err);
                }
            )}

};