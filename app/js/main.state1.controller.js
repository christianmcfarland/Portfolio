(function() {
    'use strict';

    angular
        .module('app')
        .controller('State1Controller', State1Controller);

    State1Controller.$inject = ["$http", "$log", "$filter", "ToDoListFactory"];

    /* @ngInject */
    function State1Controller($http, $log, $filter, ToDoListFactory) {

        //using vm
        var vm = this;

        //hide entry form
        vm.edit = false;

        // show entry form when click +Add new
        vm.addNew = function() {
            vm.edit = true;
        };


        // Populate ToDo list from Database upon opening the app
        vm.activate = function() {
            ToDoListFactory.getToDos().then(
                function(response) {
                    vm.ToDoLocal = response.data;
                },
                function(error) {
                    $log.error(error);
                })
        };

        vm.activate();

        // function to Add new ToDo List object to the Database
        vm.add = function(num) {

            vm.ToDo.UserId = "cec09141-5076-439b-8780-cfa5a7d7f524";
            vm.ToDo.Completed = false;
            vm.ToDo.Priority = num;

            //add new ToDo to local array
            vm.ToDoLocal.push(vm.ToDo);
            var data = vm.ToDo;

            //post new ToDo to the Database
            ToDoListFactory.postToDos(data).then(
                function(response) {
                    console.log("Success!");
                },
                function(error) {
                    $log.error(error);
                });

            //clear and hide entry form
            vm.ToDo = "";
            vm.edit = false;

        };

        //function to update an item in the database that you have "completed"
        vm.update = function(id, data) {

            data.Completed = !data.Completed;
            console.log(data);

            ToDoListFactory.putToDos(id, data).then(
                function(response) {
                    console.log("Updated successfully!");
                },
                function(error) {
                    $log.error(error);
                });

        }



        //delete an item from the list local and on database
        vm.delete = function(id, index) {

            vm.ToDoLocal.splice(index, 1);

            ToDoListFactory.deleteToDos(id).then(
                function(response) {
                    console.log("Deleted successfully!");
                },
                function(error) {
                    $log.error(error);
                });

        }


    }
})();
