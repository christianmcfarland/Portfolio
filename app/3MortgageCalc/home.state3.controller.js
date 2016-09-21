(function() {
    'use strict';

    angular
        .module('app')
        .controller('State3Controller', State3Controller);

    function State3Controller() {

        //using vm
        var vm = this;

        //empty variable to hold period select input
        vm.period = "";

        //capture inputs and calculate using formula M=P(r(1+r)^n)/((1+r)^n-1)
        //M is your monthly payment 
        //P is your principal
        //r is your monthly interest rate, calculated by dividing your annual interest rate by 12
        //n is your number of payments (the number of months you will be paying the loan) 12 or 6

        vm.Calculate = function() {
            vm.numberOfPayments = vm.loanTerm * vm.period;
            vm.monthlyInterestRate = (vm.interestRate / 100) / vm.period;
            vm.compoundInterestRate = Math.pow((1 + vm.monthlyInterestRate), vm.numberOfPayments);
            vm.interestQuotient = (vm.monthlyInterestRate * vm.compoundInterestRate) / (vm.compoundInterestRate - 1);
            vm.monthlyPayment = vm.loanBalance * vm.interestQuotient;
            vm.monthlyPaymentFinal = (Math.round(100 * (vm.monthlyPayment)) / 100).toFixed(2);

            vm.show = true;
        };

    };
})();
