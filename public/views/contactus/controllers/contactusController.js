(function () {
        angular
            .module("project")
            .controller("contactusController", contactusController);

        function contactusController($location) {
            var vm = this;

            function init() {
                console.log("In contactusController")
            }

            init();
        }

    }
)();