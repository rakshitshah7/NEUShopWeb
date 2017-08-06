(function () {
        angular
            .module("project")
            .component("productCard", productCard());

        function productCard() {

            return{
                templateUrl: "views/product/templates/productCard.html",
                bindings: { data: '=' }
            };

        }

}
)();