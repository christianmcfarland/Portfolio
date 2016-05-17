(function() {
    'use strict';

    angular
        .module('app')
        .factory('ToDoListFactory', ToDoListFactory); // https://docs.angularjs.org/guide/services

    ToDoListFactory.$inject = ['$http', '$log', '$q']; // https://github.com/johnpapa/angular-styleguide/tree/master/a1#manual-annotating-for-dependency-injection

    /* @ngInject */
    function ToDoListFactory($http, $log, $q) {

        var service = {
            getToDos: getToDos,
            postToDos: postToDos,
            putToDos: putToDos,
            deleteToDos: deleteToDos
        };
        return service;

        function getToDos() {

            var defer = $q.defer();

            $http({
                method: 'GET',
                url: 'http://localhost:64670/api/ToDoListEntries'
            }).then(function(response) {
                    if (typeof response.data === 'object') {
                        defer.resolve(response);
                        toastr.success('Success!');
                    } else {
                        defer.reject(response);
                        //error if found but empty
                        toastr.warning('Failure! </br>' + response.config.url);
                    }
                },
                // failure
                function(error) {
                    //error if the file isn't found
                    defer.reject(error);
                    $log.error(error);
                    toastr.error('error: ' + error.data + '<br/>status: ' + error.statusText);
                });

            return defer.promise;
        }


        function postToDos(data) {

            var defer = $q.defer();

            $http({
                method: 'POST',
                url: 'http://localhost:64670/api/ToDoListEntries',
                data: data
            }).then(function(response) {
                    if (typeof response.data === 'object') {
                        defer.resolve(response);
                        toastr.success('Success!');
                    } else {
                        defer.reject(response);
                        //error if found but empty
                        toastr.warning('Failure! </br>' + response.config.url);
                    }
                },
                // failure
                function(error) {
                    //error if the file isn't found
                    defer.reject(error);
                    $log.error(error);
                    toastr.error('error: ' + error.data + '<br/>status: ' + error.statusText);
                });

            return defer.promise;
        }

        function putToDos(id, data) {

            var defer = $q.defer();

            $http({
                method: 'PUT',
                url: 'http://localhost:64670/api/ToDoListEntries/' + id,
                data: data
            }).then(function(response) {
                    if (typeof response.data === 'object') {
                        defer.resolve(response);
                        toastr.success('Successfully updated!');
                    } else {
                        defer.reject(response);
                        //error if found but empty
                        toastr.warning('Failure! </br>' + response.config.url);
                    }
                },
                // failure
                function(error) {
                    //error if the file isn't found
                    defer.reject(error);
                    $log.error(error);
                    toastr.error('error: ' + error.data + '<br/>status: ' + error.statusText);
                });

            return defer.promise;
        }

        function deleteToDos(id) {

            var defer = $q.defer();

            $http({
                method: 'DELETE',
                url: 'http://localhost:64670/api/ToDoListEntries/' + id
            }).then(function(response) {
                    if (typeof response.data === 'object') {
                        defer.resolve(response);
                        toastr.success('Success!');
                    } else {
                        defer.reject(response);
                        //error if found but empty
                        toastr.warning('Failure! </br>' + response.config.url);
                    }
                },
                // failure
                function(error) {
                    //error if the file isn't found
                    defer.reject(error);
                    $log.error(error);
                    toastr.error('error: ' + error.data + '<br/>status: ' + error.statusText);
                });

            return defer.promise;
        }

    }
})();
