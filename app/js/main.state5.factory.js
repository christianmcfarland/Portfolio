(function() {
    'use strict';

    angular
        .module('app')
        .factory('ShuffleFactory', ShuffleFactory); // https://docs.angularjs.org/guide/services

    /* @ngInject */
    function ShuffleFactory() {

        var service = {
            shuffle: shuffle
        };

        return service;

        function shuffle() {
            return function(input) {
                var out = [];
                // Perform shallow copy of the array
                angular.forEach(input, function(value) {
                    out.push(value);
                });
                // Perform Fisher-Yates shuffle
                for (var i = input.length - 1; i > 0; i--) {
                    var j = Math.floor(Math.random() * (i + 1)),
                        temp = out[i];

                    out[i] = out[j];
                    out[j] = temp;
                }
                return out;
            };
        }
    }

})();
