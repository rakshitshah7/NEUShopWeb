(function () {
        angular
            .module("project")
            .controller("productController", productController);

        function productController($location, $rootScope) {
            var vm = this;
            vm.product = [{productID: 1,productName: "Converse Shoes", description: "Chuck Taylor All Star Classic Colours",img: "https://www.converse.com/on/demandware.static/-/Sites-ConverseMaster/default/dw48f5fc3c/images/hi-res/M9621C_standard.png?sw=580&sh=580&sm=fit", edition: "Classic red converse edition", color:"Red", styleNo:"M9621C", costPrice:75 , sellingPrice:50 },{productID: 2,productName: "Converse Shoes", description: "Chuck Taylor All Star Classic Colours",img: "https://www.converse.com/on/demandware.static/-/Sites-ConverseMaster/default/dwec469ff7/images/hi-res/151116C_standard.jpg?sw=580&sh=580&sm=fit", edition: "Classic Neon converse edition", color:"Neon", styleNo:"M9631C", costPrice:45 , sellingPrice:40 }];
            vm.addtoCart = addtoCart;

            function init() {
                if( $rootScope.checkoutList === undefined)
                {$rootScope.checkoutList =[];}
                console.log("In productController")
            }

            init();

            function addtoCart(product) {
                var productExists = $.grep( $rootScope.checkoutList, function( n, i ) {return n.productID == product.productID;});
                if(productExists.length ===0)
                {
                var productObj = {
                    productID: product.productID,
                    productName: product.productName,
                    description: product.description,
                    img: product.img,
                    edition: product.edition,
                    color: product.color,
                    styleNo: product.styleNo,
                    costPrice: product.costPrice,
                    sellingPrice: product.sellingPrice,
                    qty : 1
                }
                    $rootScope.checkoutList.push(productObj);
                }
                else{
                    var id = productExists[0].productID;
                    $.each($rootScope.checkoutList, function() {
                        if (this.productID === id) {
                            this.qty = this.qty+1;
                        }
                    });
                }

                console.log(product);

            }
        }

    }
)();