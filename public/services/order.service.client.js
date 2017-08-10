(function () {
    angular
        .module("project")
        .factory("OrderService", OrderService);

    function OrderService($http) {
        var api = {
            getUserOrders: getUserOrders,
            cancelUserOrder: cancelUserOrder,
            saveUserOrder: saveUserOrder
        };

        return api;

        function getUserOrders(user) {
            return $http.get('/api/project/userOrders', user);
        }

        function cancelUserOrder(order) {
            return $http.post("/api/project/cancelOrder", order);
        }

        function saveUserOrder(order,user) {
            return $http.post("/api/project/saveUserOrder", order,user);
        }

    }

})();