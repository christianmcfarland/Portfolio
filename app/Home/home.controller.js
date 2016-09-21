(function() {
    'use strict';

    angular
        .module('app')
        .controller('HomeController', HomeController);

    HomeController.$inject = [];

    /* @ngInject */
    function HomeController() {

        //using vm
        var vm = this;

        vm.educations = ["Origin Code Academy", "Palm Beach State College"]

        vm.experiences = ["Matrix Mediation", "Adventure Pass"]

        vm.examples = ["Adventure Pass", "AngularJS Projects", "Chirper", "Loop Scheduler", "Super Joe Campers"]

        vm.trueistrue = false;



    }
})();
