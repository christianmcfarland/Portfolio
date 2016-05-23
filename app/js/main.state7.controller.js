(function() {
    'use strict';

    angular
        .module('app')
        .controller('State7Controller', State7Controller);

    State7Controller.$inject = ['$log', 'MovieFactory'];



    /* @ngInject */
    function State7Controller($log, MovieFactory) {

        //using vm
        var vm = this;

        //ng-model with movie search input
        vm.movie = '';

        //hide search results initially
        vm.hide = false;

        //function to call the movie factory
        vm.newMovies = function() {

            var first = "http://www.omdbapi.com/?s=";
            var url = first + vm.movie;

            //call the movie factory, pass in the url variable created above
            MovieFactory.getMovies(url).then(
                function(response) {

                    //assign array response from api to variable vm.movies
                    vm.movies = response.data;
                },
                function(error) {
                    $log.error(error);
                });


        };


    }
})();
