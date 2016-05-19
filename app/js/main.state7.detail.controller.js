(function() {
    'use strict';

    angular
        .module('app')
        .controller('State7DetailController', State7DetailController);

    State7DetailController.$inject = ['$log', 'MovieFactory', '$stateParams'];



    /* @ngInject */
    function State7DetailController($log, MovieFactory, $stateParams) {
        var vm = this;
        vm.title = 'State7DetailController';
        


            var first = "http://www.omdbapi.com/?t=";
            var url = first + $stateParams.movieName;

            MovieFactory.getMovies(url).then(
                function(response) {
                    vm.movies = response.data;
                    console.log(vm.movies);
                    // console.log(vm.movies);
                },
                function(error) {
                    $log.error(error);
                });


    


    }
})();