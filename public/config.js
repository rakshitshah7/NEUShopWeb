(function () {
    angular
        .module("project")
        .config(configuration);

    function configuration($routeProvider) {
        $routeProvider
            .when("/home", {
                templateUrl: 'views/homepage/templates/homepage.view.client.html',
                controller: 'homepageController',
                controllerAs: 'model'
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
})();