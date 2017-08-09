(function () {
    angular
        .module("project")
        .controller("loginController", loginController)

    function loginController($location, UserService) {
        var vm = this;
        vm.login = login;
        vm.submit = submit;

        function init() {
            console.log("In loginController")
        }

        $('.toggle').on('click', function() {
            $('.containerUser').stop().addClass('active');
        });

        $('.close').on('click', function() {
            $('.containerUser').stop().removeClass('active');
        });

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

        function submit(form) {

            if(!form.$valid)
            {
                alert("Please complete the form!");
            }
            else
            { var user = {
                firstName: form.firstName.$modelValue,
                lastName: form.lastName.$modelValue,
                password: form.password.$modelValue,
                username: form.username.$modelValue,
                };
                UserService
                    .register(user)
                    .then(function (response) {
                            var reg = response.data;
                            if (reg) {
                                console.log("Successful");
                            } else {
                                console.log("Unsuccesful reg");
                            }
                        },
                        function (error) {

                        });
                alert("Thanks for completing the registration");
                document.getElementById("userform").reset();
            }
        }
    }
})();
