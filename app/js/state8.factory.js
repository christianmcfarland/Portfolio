(function() {
    'use strict';

    angular
        .module('app')
        .factory('ChirperFactory', ChirperFactory); // https://docs.angularjs.org/guide/services

    ChirperFactory.$inject = ['$http', '$log', '$q', 'toastr']; // https://github.com/johnpapa/angular-styleguide/tree/master/a1#manual-annotating-for-dependency-injection

    /* @ngInject */
    function ChirperFactory($http, $log, $q, toastr) {

        var service = {
            getChirps: getChirps,
            postChirp: postChirp,
            // putToDos: putToDos,
            deleteChirp: deleteChirp,
            postComment: postComment,
            deleteComment: deleteComment
        };
        return service;

        //$http GET function 
        function getChirps() {

            var defer = $q.defer();

            $http({
                method: 'GET',
                url: 'http://localhost:50341/api/Posts'
            }).then(function(response) {
                    if (typeof response.data === 'object') {
                        defer.resolve(response);
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

        // //$http POST function, data = vm.ToDo 
        function postChirp(data) {

            var defer = $q.defer();

            $http({
                method: 'POST',
                url: 'http://localhost:50341/api/Posts',
                data: data
            }).then(function(response) {
                    if (typeof response.data === 'object') {
                        defer.resolve(response);
                        toastr.success('Added your Chirp!');
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

        // //$http PUT function, id = ToDoListEntryId, data = Todo in vm.ToDoLocal
        // function putToDos(id, data) {

        //     var defer = $q.defer();

        //     $http({
        //         method: 'PUT',
        //         url: 'http://localhost:64670/api/ToDoListEntries/' + id,
        //         data: data
        //     }).then(function(response) {
        //             if (typeof response.data === 'object') {
        //                 defer.resolve(response);
        //                 toastr.success('Successfully updated!');
        //             } else {
        //                 defer.reject(response);
        //                 //error if found but empty
        //                 toastr.warning('Failure! </br>' + response.config.url);
        //             }
        //         },
        //         // failure
        //         function(error) {
        //             //error if the file isn't found
        //             defer.reject(error);
        //             $log.error(error);
        //             toastr.error('error: ' + error.data + '<br/>status: ' + error.statusText);
        //         });

        //     return defer.promise;
        // }

        //$http DELETE function, id = TodoListEntryId
        function deleteChirp(id) {

            var defer = $q.defer();

            $http({
                method: 'DELETE',
                url: 'http://localhost:50341/api/Posts/' + id
            }).then(function(response) {
                    if (typeof response.data === 'object') {
                        defer.resolve(response);
                        toastr.success('Deleted Post!');
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


        function postComment(data) {

            var defer = $q.defer();

            $http({
                method: 'POST',
                url: 'http://localhost:50341/api/Comments',
                data: data
            }).then(function(response) {
                    if (typeof response.data === 'object') {
                        defer.resolve(response);
                        toastr.success('Added your Comment!');
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

        function deleteComment(id) {

            var defer = $q.defer();

            $http({
                method: 'DELETE',
                url: 'http://localhost:50341/api/Comments/' + id
            }).then(function(response) {
                    if (typeof response.data === 'object') {
                        defer.resolve(response);
                        toastr.success('Deleted Post!');
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
