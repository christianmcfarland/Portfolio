(function() {
    'use strict';

    angular
        .module('app')
        .factory('authService', authService);

    authService.$inject = ['$http', '$q', 'localStorageService', '$state', 'apiUrl']; // https://github.com/johnpapa/angular-styleguide/tree/master/a1#manual-annotating-for-dependency-injection

    /* @ngInject */
    function authService($http, $q, localStorageService, $state, apiUrl) {

        var state = {
            isLoggedIn: false
        };

        var service = {
            state: state,
            register: register,
            login: login,
            logout: logout,
            init: init
        };
        return service;

        ////////////////////

        function register(registration) {

            var defer = $q.defer();

            $http({
                method: 'POST',
                url: apiUrl + 'accounts/register',
                data: registration
            }).then(function(response) {
                    defer.resolve(response);
                },
                // failure
                function(error) {
                    //error if the file isn't found
                    defer.reject(error);
                });

            return defer.promise;
        }


        function login(username, password) {

            logout();

            var defer = $q.defer();

            var data = 'grant_type=password&username=' + username + '&password=' + password;



            $http({
                method: 'POST',
                url: apiUrl + 'token',
                data: data,
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
            }).then(function(response) {
                    defer.resolve(response);
                    localStorageService.set('authorizationData', response.data);
                    state.isLoggedIn = true;
                },
                // failure
                function(error) {
                    //error if the file isn't found
                    defer.reject(error);
                });

            return defer.promise;
        }


        function logout() {
            localStorageService.remove('authorizationData');

            state.isLoggedIn = false;

            $state.go('main');
        }

        function init() {
            var authData = localStorageService.get('authorizationData');

            if (authData) {
                state.isLoggedIn = true;
                $state.go('state8');
            }
        }

    }
})();
