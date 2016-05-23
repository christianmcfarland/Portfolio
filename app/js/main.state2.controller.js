(function() {
    'use strict';

    angular
        .module('app')
        .controller('State2Controller', State2Controller);

    function State2Controller() {

        //using vm
        var vm = this;

        //array of planets, multiplication factor, and image url
        vm.Planets = [
            { Name: 'Sun', Factor: 27.9, Image: 'sun.jpg' },
            { Name: 'Mercury', Factor: 1.19, Image: 'mercury.jpg' },
            { Name: 'Venus', Factor: 1.19, Image: 'venus.jpg' },
            { Name: 'Earth', Factor: 1, Image: 'earth.jpg' },
            { Name: 'Moon', Factor: 0.1655, Image: 'moon.jpg' },
            { Name: 'Mars', Factor: 0.3895, Image: 'mars.jpg' },
            { Name: 'Jupiter', Factor: 2.640, Image: 'jupiter.jpg' },
            { Name: 'Saturn', Factor: 1.139, Image: 'saturn.jpg' },
            { Name: 'Uranus', Factor: 0.917, Image: 'uranus.jpg' },
            { Name: 'Neptune', Factor: 1.148, Image: 'neptune.jpg' },
            { Name: 'Pluto', Factor: 0.06, Image: 'pluto.jpg' }
        ];

        //Multiply input weight by the selected planets multiplication factor and show the results
        vm.calculate = function(planet) {
            vm.PlanetWeight = planet.Factor * vm.inputWeight;
            vm.Planet = planet;
            vm.showResults = true;
        };
    }
})();
