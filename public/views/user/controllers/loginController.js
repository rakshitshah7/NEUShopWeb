(function () {
    angular
        .module("project")
        .controller("loginController", loginController)

    function loginController($location, UserService) {
        var vm = this;
        vm.login = login;

        function init() {
            console.log("In loginController")
        }

        init();

        function login(username, password) {
            if (username === "" || username == null) {
                vm.error = "Username cannot be blank !"
            } else if (password === "" || password == null) {
                vm.error = "Password cannot be blank !"
            } else {
                UserService
                    .login(username, password)
                    .then(function (response) {
                            var user = response.data;
                            if (user) {
                                $location.url("/user");
                            } else {
                                vm.error = "Invalid Credentials";
                            }
                        },
                        function (error) {
                            vm.error = "Invalid Credentials"
                        });
            }
        }
    }
})();