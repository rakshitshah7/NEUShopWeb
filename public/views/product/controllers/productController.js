(function () {
        angular
            .module("project")
            .controller("productController", productController);

        function productController($location, $rootScope, $filter, ProductService) {
            var vm = this;

            vm.product = [{productID: 1,productName: "Converse Shoes", description: "Chuck Taylor All Star Classic Colours",img: "https://www.converse.com/on/demandware.static/-/Sites-ConverseMaster/default/dw48f5fc3c/images/hi-res/M9621C_standard.png?sw=580&sh=580&sm=fit", edition: "Classic red converse edition", color:"Red", styleNo:"M9621C", costPrice:75 , sellingPrice:50 },{productID: 2,productName: "Converse Shoes", description: "Chuck Taylor All Star Classic Colours",img: "https://www.converse.com/on/demandware.static/-/Sites-ConverseMaster/default/dwec469ff7/images/hi-res/151116C_standard.jpg?sw=580&sh=580&sm=fit", edition: "Classic Neon converse edition", color:"Neon", styleNo:"M9631C", costPrice:45 , sellingPrice:40 }];
            vm.filteredList = vm.product;
            vm.filterProducts = filterProducts;
            vm.searchString = "";
            vm.criterias = ["Product Name","Description","Editon","Color","Style","Price"];
            vm.criteria = "Product Name";
            vm.getProducts = getProducts;
            function init() {
                if( $rootScope.checkoutList === undefined)
                {$rootScope.checkoutList =[];}
                console.log("In productController")
                vm.getProducts();
            }

            init();


            function filterProducts() {
                if(vm.searchString.length >3) {
                    if(vm.criteria === "Product Name") {
                        vm.filteredList = $filter('filter')(vm.product, {
                            productName: vm.searchString,
                        });
                    }
                    if(vm.criteria === "Description") {
                        vm.filteredList = $filter('filter')(vm.product, {
                            description: vm.searchString,
                        });
                    }
                    if(vm.criteria === "Editon") {
                        vm.filteredList = $filter('filter')(vm.product, {
                            edition: vm.searchString,
                        });
                    }
                    if(vm.criteria === "Color") {
                        vm.filteredList = $filter('filter')(vm.product, {
                            color: vm.searchString,
                        });
                    }
                    if(vm.criteria === "Style") {
                        vm.filteredList = $filter('filter')(vm.product, {
                            styleNo: vm.searchString,
                        });
                    }
                    if(vm.criteria === "Price") {
                        vm.filteredList = $filter('filter')(vm.product, {
                            sellingPrice: vm.searchString,
                        });
                    }
                }
                if(vm.searchString.length === 0)
                {
                    vm.filteredList = vm.product;
                }
            }

            function getProducts() {
                ProductService.getProducts()
                    .then(function (response) {

                            //vm.product = response.data;
                        },
                        function (error) {
                            vm.error = "Invalid data"
                            toaster.pop('error', "Products Error", "Error in Getting Products!");
                        });
            }
        }

    }
)();