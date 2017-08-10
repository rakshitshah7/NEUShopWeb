module.exports = function (app, models) {

    var productModelProject = models.productModelProject;


    app.get('/api/project/getProducts' , getProducts);
    app.post("/api/project/saveProduct", saveProduct);
    app.post("/api/project/getProductById", getProductById);




    function getProducts(req, res) {
        productModelProject
            .getProducts()
            .then(
                function (users) {
                    res.send(users);
                },
                function (error) {
                    res.send(null);
                }
            );
        // res.send(200);
    }

    function saveProduct(req, res) {
        var product = req.body;
        productModelProject
            .saveProduct(product)
            .then(
                function (product) {
                    res.json(product);
                },
                function (error) {
                    res.statusCode(400).send(error);
                }
            );
    }

    function getProductById(req, res) {

        //Check what is been recieved.
        // var venueId = req.params.venueId;
        var productId = req.body;
        productModelProject
            .getProductById(productId)
            .then(
                function (product) {
                    res.json(product);
                },
                function (error) {
                    res.statusCode(404).send(null);
                }
            )
    }
};