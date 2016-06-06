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

        //$http GET function 
        function getToDos() {

            var defer = $q.defer();

            $http({
                method: 'GET',
                url: 'http://localhost:50341/api/ToDoListEntries'
            }).then(function(response) {
                    if (typeof response.data === 'object') {
                        defer.resolve(response);
                        toastr.success('Found ToDo List Items!');
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

        //$http POST function, data = vm.ToDo 
        function postToDos(data) {

            var defer = $q.defer();

            $http({
                method: 'POST',
                url: 'http://localhost:50341/api/ToDoListEntries',
                data: data
            }).then(function(response) {
                    if (typeof response.data === 'object') {
                        defer.resolve(response);
                        toastr.success('Added ToDo List Item!');
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

        //$http PUT function, id = ToDoListEntryId, data = Todo in vm.ToDoLocal
        function putToDos(id, data) {

            var defer = $q.defer();

            $http({
                method: 'PUT',
                url: 'http://localhost:50341/api/ToDoListEntries/' + id,
                data: data
            }).then(function(response) {
                    if (typeof response.data === 'object') {
                        defer.resolve(response);
                        toastr.success('Updated ToDo List Item!');
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

        //$http DELETE function, id = TodoListEntryId
        function deleteToDos(id) {

            var defer = $q.defer();

            $http({
                method: 'DELETE',
                url: 'http://localhost:50341/api/ToDoListEntries/' + id
            }).then(function(response) {
                    if (typeof response.data === 'object') {
                        defer.resolve(response);
                        toastr.success('Deleted ToDo List Item!');
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
