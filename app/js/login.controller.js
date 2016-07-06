(function() {
    'use strict';

    angular
        .module('app')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['authService', '$state', 'toastr'];

    /* @ngInject */
    function LoginController(authService, $state, toastr) {
        var vm = this;
        vm.title = 'LoginController';

        vm.login = function() {


            authService.login(vm.username, vm.password)
                .then(
                    function(response) {
                        toastr.success('Login succeeded!');
                        $state.go("state8");
                    },
                    function(message) {
                        toastr.warning(message);
                    }
                );
        };
    }
})();
