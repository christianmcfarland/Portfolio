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

        vm.calcShowing = false;


    }
})();
