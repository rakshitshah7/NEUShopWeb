(function () {
        function productcardController(toaster, $rootScope) {
            var ctrl = this;

            ctrl.addtocart = function () {
                toaster.pop('info', "Information", "Item Added to the cart!! Check Cart");
                ctrl.addtoCart({product: ctrl.data});
            };

            ctrl.togglefav = function (product) {
                if ($rootScope != null) {
                    if ($rootScope.favList === undefined) {
                        $rootScope.favList = [];
                    }

                    var productIndex = $.map($rootScope.favList, function (obj, index) {
                        if (obj.productID == product.productID) {
                            return index;
                        }
                    });
                    if (productIndex > -1 && $rootScope.favList.length !=0 ) {
                        toaster.pop('info', "Information", "Removed from favourite list");
                        $rootScope.favList.splice(productIndex, 1);
                    }
                    else {
                        toaster.pop('info', "Information", "Item Added to your favourites!!");
                        $rootScope.favList.push(ctrl.data);
                    }
                }
                else {
                    toaster.pop('error', "Information", "Log In to add");
                }
            };
        }

        angular
            .module("project")
            .component("productCard", productCard());

        function productCard() {

            return {
                templateUrl: "views/product/templates/productCard.html",
                bindings: {data: '=', addtoCart: '&'},
                controller: productcardController,
            };

        }

    })();