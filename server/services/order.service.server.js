

module.exports = function (app, models) {
    var orderModelProject = models.orderModelProject;


    app.get('/api/project/userOrders', getUserOrders);
    app.post("/api/project/saveUserOrder",saveUserOrder);
    app.post("/api/project/cancelOrder:productId", cancelUserOrder);



    function saveUserOrder(req,res){
        // var product = req.body;



    }

    function saveProduct(req,res){
        var product = req.body;
        orderModelProject
            .saveProduct(product)
            .then(
                function(product){
                    res.send(product);
                },
                function (error) {
                    res.statusCode(400).send(error);
                }
            )


    }

    function getProductById(req, res) {
        var productId = req.params.productId;
        // var product = req.id;
        orderModelProject
            .getProductById(productId)
            .then(
                function(product){
                    res.send(product);
                },
                function (error) {
                    res.statusCode(400).send(error);
                }
            )

    }

};