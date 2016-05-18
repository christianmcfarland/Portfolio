(function() {
    'use strict';

    angular
        .module('app')
        .controller('State4Controller', State4Controller);

    function State4Controller() {
        
        //using vm
        var vm = this;

        vm.Calculate = function() {

            //get raw change value
            vm.change = vm.money - vm.total;

            //get dollars by simply rounding down with Math.floor
            vm.dollars = Math.floor((vm.change * 100) / 100);

            //% returns the remainder after you take out the dollars (100)
            vm.return1 = (vm.change * 100) % 100

            //quarters equals that remainder divided by 25
            vm.quarters = Math.floor(vm.return1 / 25)
            
            //% returns the remainder after you take out the quarters (25)
            vm.return2 = vm.return1 % 25;

            //dimes equals the remainder divided by 10
            vm.dimes = Math.floor(vm.return2 / 10);
            
            //% returns the remainder after taking out dimes (10)
            vm.return3 = vm.return2 % 10;

            //nickels equals the remainder divided by 5
            vm.nickels = Math.floor(vm.return3 / 5);

            //pennies equals the remainder after taking out nickels (5)
            vm.pennies = Math.round(vm.return3 % 5);
        };
    };
})();
