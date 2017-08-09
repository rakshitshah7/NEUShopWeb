(function () {
        function productcardController(toaster) {
            var ctrl = this;

            ctrl.addtocart = function() {
                toaster.pop('info', "Information", "Item Added to the cart!! Check Cart");
                ctrl.addtoCart({product: ctrl.data});
            };
        }

        angular
            .module("project")
            .component("productCard", productCard());

        function productCard() {

            return{
                templateUrl: "views/product/templates/productCard.html",
                bindings: { data: '=', addtoCart: '&'   },
                controller: productcardController,
            };

        }

}
)();