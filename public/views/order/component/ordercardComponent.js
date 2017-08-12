(function () {
        function ordercardConroller(toaster) {
            var ctrl = this;
            ctrl.bufferValue = 75;
            ctrl.value = 50;
            ctrl.mode = "buffer";
            ctrl.color = "primary"

            ctrl.cancelorder = function() {
                //ctrl.deletefromCart({product: ctrl.data});
            };

            ctrl.onqtychange = function(){
                if(ctrl.data.qty==0 || ctrl.data.qty<0)
                {
                    toaster.pop('info', "Information", "Item Automatically Removed");
                    ctrl.deletefromCart({product: ctrl.data});
                }
                else {
                    ctrl.onqtyChange({product: ctrl.data});
                }
            }
        }

        angular
            .module("project")
            .component("orderCard", orderCard());

        function orderCard() {

            return{
                templateUrl: "views/order/templates/orderCard.html",
                bindings: { data: '='},
                controller: ordercardConroller,
            };

        }

    }
)();