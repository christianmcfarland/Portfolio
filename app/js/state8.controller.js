(function() {
    'use strict';

    angular
        .module('app')
        .controller('State8Controller', State8Controller);

    State8Controller.$inject = ['localStorageService', '$state', 'authService', 'ChirperFactory', '$log'];



    /* @ngInject */
    function State8Controller(localStorageService, $state, authService, ChirperFactory, $log) {
        //using vm
        var vm = this;

        //hide entry form
        vm.edit = false;

        vm.hovering=false;
        vm.hovering1=false;



        // show entry form when click +Add new
        vm.addNew = function() {
            vm.edit = true;
        };

        vm.logout = function() {
            authService.logout()
        };


        activate();

        function activate() {
            var authData = localStorageService.get('authorizationData');
            if (authData) {
                vm.name = authData.username;
                vm.firstName = authData.firstname;
                vm.lastName = authData.lastname;
                populateFeed();
            } else {
                $state.go('login');
            }
        }


        // Populate Chirp Feed from Database upon opening the app
        function populateFeed() {
            ChirperFactory.getChirps().then(
                function(response) {
                    vm.Chirps = response.data;
                    console.log(vm.Chirps);
                },
                function(error) {
                    $log.error(error);
                })
        };






        //function to Add new ToDo List object to the Database
        vm.addChirp = function() {
            vm.Post.DisplayName = vm.name;
            vm.Post.FirstName = vm.firstName;
            vm.Post.LastName = vm.lastName;
            var data = vm.Post;
            console.log(data);

            //post new ToDo to the Database
            ChirperFactory.postChirp(data).then(
                function(response) {
                    console.log("Success!");
                    populateFeed();
                },
                function(error) {
                    $log.error(error);
                });

            //clear and hide entry form
            vm.Post = "";
            vm.edit = false;

        };

        // //function to update an item in the database that you have "completed"
        // vm.update = function(id, data) {

        //     data.Completed = !data.Completed;
        //     console.log(data);

        //     ToDoListFactory.putToDos(id, data).then(
        //         function(response) {
        //             console.log("Updated successfully!");
        //         },
        //         function(error) {
        //             $log.error(error);
        //         });

        // }



        //delete an item from the list local and on database
        vm.deleteChirp = function(id) {

            ChirperFactory.deleteChirp(id).then(
                function(response) {
                    console.log("Deleted successfully!");
                },
                function(error) {
                    $log.error(error);
                });

        }

        //function to Add new ToDo List object to the Database
        vm.addComment = function(id) {


            vm.Comment.PostId = id;

            var data = vm.Comment;
            console.log(data);

            //post new ToDo to the Database
            ChirperFactory.postComment(data).then(
                function(response) {
                    console.log("Success!");
                    populateFeed();
                },
                function(error) {
                    $log.error(error);
                });

            //clear and hide entry form
            vm.Comment = "";

        };


        vm.deleteComment = function(id) {

            ChirperFactory.deleteComment(id).then(
                function(response) {
                    console.log("Deleted successfully!");
                },
                function(error) {
                    $log.error(error);
                });

        }






    };

})();
