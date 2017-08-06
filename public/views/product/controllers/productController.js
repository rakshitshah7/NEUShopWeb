(function () {
        angular
            .module("project")
            .controller("productController", productController);

        function productController($location) {
            var vm = this;
            vm.product = [{productName: "Converse Shoes", description: "Chuck Taylor All Star Classic Colours",img: "https://www.converse.com/on/demandware.static/-/Sites-ConverseMaster/default/dw48f5fc3c/images/hi-res/M9621C_standard.png?sw=580&sh=580&sm=fit", edition: "Classic red converse edition", color:"Red", styleNo:"M9621C", costPrice:75 , sellingPrice:50 },{productName: "Converse Shoes", description: "Chuck Taylor All Star Classic Colours",img: "https://www.converse.com/on/demandware.static/-/Sites-ConverseMaster/default/dwec469ff7/images/hi-res/151116C_standard.jpg?sw=580&sh=580&sm=fit", edition: "Classic Neon converse edition", color:"Neon", styleNo:"M9631C", costPrice:45 , sellingPrice:40 }];

            function init() {
                console.log("In productController")
            }

            init();
        }

    }
)();