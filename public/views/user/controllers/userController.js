(function () {
        angular
            .module("project")
            .controller("userController", userController);

        function userController($location) {
            var vm = this;

            function init() {
                console.log("In userController")
            }

            init();
        }

    }
)();