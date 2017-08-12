(function () {
        angular
            .module("project")
            .controller("userController", userController);

        function userController($location, $rootScope, OrderService, UserService,$mdSidenav) {
            var vm = this;
            vm.currentUser = $rootScope.currentUser;
            vm.favList = [];
            vm.orderList = [];
            vm.getUserOrders = getUserOrders;
            vm.cancelOrder = cancelOrder;

            function getUserOrders() {
                
                OrderService
                    .getUserOrders(currentUser._id)
                    .then(function (response) {
                            vm.orderList = response.data;
                        },
                        function (error) {
                            vm.error = "Invalid Credentials"
                        });

            }

            function cancelOrder(order) {

                OrderService
                    .cancelUserOrder(order)
                    .then(function (response) {

                            //vm.orderList = response.data;
                        },
                        function (error) {
                            vm.error = "Invalid Credentials"
                        });

            }

            $(".btn-pref .btn").click(function () {
                $(".btn-pref .btn").removeClass("btn-primary").addClass("btn-default");
                // $(".tab").addClass("active"); // instead of this do the below
                $(this).removeClass("btn-default").addClass("btn-primary");
            });

            function init() {
                if ($rootScope.favList === undefined) {
                    $rootScope.favList = [];
                }
                if ($rootScope.currentUser === undefined) {
                    $rootScope.currentUser = {};
                }
                vm.currentUser = $rootScope.currentUser;
                vm.favList = $rootScope.favList;
                console.log("In userController")
            }

            init();


            function buildToggler(componentId) {
                return function() {
                    $mdSidenav(componentId).toggle();
                };
            }
            vm.toggleLeft = buildToggler('left');
            vm.toggleRight = buildToggler('right');
        }

    }
)();
