(function () {
    angular
        .module("project")
        .config(configuration);

    function configuration($routeProvider) {
        $routeProvider
            .when("/home", {
                templateUrl: 'views/homepage/templates/homepage.view.client.html',
                controller: 'homepageController',
                controllerAs: 'model',
                resolve: {
                    loggedIn: checkLogged
                }
            })
            .when("/userreg", {
                templateUrl: 'views/userregistration/templates/userregistration.view.client.html',
                controller: 'userregistrationController',
                controllerAs: 'model'
            })
            .when("/user", {
                templateUrl: "views/user/templates/user.view.client.html",
                controller: "userController",
                controllerAs: "model",
                resolve: {
                    loggedIn: checkLoggedIn
                }
            })
            .when("/login", {
                templateUrl: "views/user/templates/login.view.client.html",
                controller: "loginController",
                controllerAs: "model"
            })
            .when("/logout", {
                templateUrl: "views/user/templates/logout.view.client.html",
                controller: "logoutController",
                controllerAs: "model"
            })
            .when("/aboutus", {
                templateUrl: 'views/aboutus/templates/aboutus.view.client.html',
                controller: 'aboutusController',
                controllerAs: 'model'
            })
            .when("/contactus", {
                templateUrl: 'views/contactus/templates/contactus.view.client.html',
                controller: 'contactusController',
                controllerAs: 'model'
            })
            .when("/information", {
                templateUrl: 'views/information/templates/information.view.client.html',
                controller: 'informationController',
                controllerAs: 'model'
            })
            .when("/services", {
                templateUrl: 'views/services/templates/services.view.client.html',
                controller: 'servicesController',
                controllerAs: 'model'
            })
            .otherwise({redirectTo : '/home'});
    }

    function checkLoggedIn($q, $location, $rootScope, UserService) {
        var deferred = $q.defer();

        UserService
            .loggedIn()
            .then(
                function (response) {
                    var user = response.data;
                    if (user == '0') {
                        $rootScope.currentUser = null;
                        deferred.reject();
                        $location.url("/login");
                    } else {
                        $rootScope.currentUser = user;
                        deferred.resolve();
                    }
                },
                function (error) {
                    $location.url("/login");
                }
            );

        return deferred.promise;
    };

    function checkLogged($q, $location, $rootScope, UserService) {

        UserService
            .loggedIn()
            .then(
                function (response) {
                    var user = response.data;
                    if (user == '0') {
                        $rootScope.currentUser = null;
                    } else {
                        $rootScope.currentUser = user;
                    }
                },
                function (error) {
                }
            );

    };

})();