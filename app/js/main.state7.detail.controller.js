(function() {
    'use strict';

    angular
        .module('app')
        .controller('State7DetailController', State7DetailController);


    //passing in stateParams (movieName from State 7, "view details" button)
    State7DetailController.$inject = ['$log', 'MovieFactory', '$stateParams'];



    /* @ngInject */
    function State7DetailController($log, MovieFactory, $stateParams) {

        //using vm
        var vm = this;

        vm.title = 'State7DetailController';



        var first = "http://www.omdbapi.com/?t=";

        //call name from stateParams and add it to the end of url
        var url = first + $stateParams.movieName;

        //call movie factory, passing in variable url created above
        MovieFactory.getMovies(url).then(
            function(response) {

                //response from api call assigned to vm.movies
                vm.movies = response.data;
            },
            function(error) {
                $log.error(error);
            });





    }
})();
