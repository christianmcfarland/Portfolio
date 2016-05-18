(function() {
    'use strict';

    angular
        .module('app')
        .controller('State3Controller', State3Controller);

    function State3Controller() {

    	var vm=this;
    	vm.period="";

        vm.Calculate = function() {
            vm.numberOfPayments = vm.loanTerm * vm.period;
            vm.monthlyInterestRate = (vm.interestRate / 100) / vm.period;
            vm.compoundInterestRate = Math.pow((1 + vm.monthlyInterestRate), vm.numberOfPayments);
            vm.interestQuotient = (vm.monthlyInterestRate * vm.compoundInterestRate) / (vm.compoundInterestRate - 1);
            vm.monthlyPayment = vm.loanBalance * vm.interestQuotient;
            vm.monthlyPaymentFinal = (Math.round(100 * (vm.monthlyPayment)) / 100).toFixed(2);

            vm.show=true;
        };

    };
})();
