module.exports = function (app, models) {

    var productModelProject = models.productModelProject;

    app.post("/api/project/getproduct", createProduct;
    app.get("/api/project/product/:productId", findproductById);
    app.put("/api/project/product/:productId", updateProduct);
    app.put("/api/project/product/:productId/addComment", addComment);
    app.put("/api/project/product/:productId/deleteComment", deleteComment);
    app.put("/api/project/product/:productId/addFavorite", addFavoriteOf);
    app.put("/api/project/product/:productId/removeFavorite", removeFavoriteOf);
    app.get("/api/project/product/:productId/isFavoriteOf/:userId", isFavoriteOf);
    app.get("/api/project/admin/venues", getAllProduct);
    app.delete("/api/project/product/:productId", deleteProduct);



};