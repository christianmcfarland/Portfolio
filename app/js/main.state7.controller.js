(function() {
    'use strict';

    angular
        .module('app')
        .controller('State7Controller', State7Controller);

    State7Controller.$inject = ['$log', 'MovieFactory'];



    /* @ngInject */
    function State7Controller($log, MovieFactory) {
        var vm = this;
        vm.movie = '';
        vm.hide=false;


        vm.newMovies = function() {

            var first = "http://www.omdbapi.com/?s=";
            var url = first + vm.movie;

            MovieFactory.getMovies(url).then(
                function(response) {
                    vm.movies = response.data;
                    // console.log(vm.movies);
                },
                function(error) {
                    $log.error(error);
                });


        };


    }
})();