(function() {
    'use strict';

    angular
        .module('app')
        .controller('State6Controller', State6Controller);

    State6Controller.$inject = ['$log', 'WeatherFactory'];



    /* @ngInject */
    function State6Controller($log, WeatherFactory) {

        //using vm
        var vm = this;

        vm.title = 'State6Controller';

        //empty array to hold previously searched cities
        vm.histories = [];

        //call function to get weather 
        activate();

        //tied (ng-model) with city search input        
        vm.cityName = '';

        //call function from factory to get weather for default "Palm Springs"
        function activate() {
            WeatherFactory.getWeather('http://api.openweathermap.org/data/2.5/weather?q=palmsprings&units=imperial&APPID=fbe8d3c5bbdf529fc2c01b2859b54fa3').then(
                function(response) {

                    //assign a variable to the reponse from the api
                    vm.weather = response.data;

                    //call function to add History, passing the name of the city searched and the time of the search
                    addHistory(vm.weather.name, moment().format('MM-DD-YY h:mm:ss a'));
                },
                function(error) {
                    $log.error(error);
                });

        };

        //add name and time of search to the array of vm.histories
        function addHistory(name, time) {

            vm.histories.push({
                'name': name,
                'time': time,
            });


        };

        //function to take out the spaces in the name of the city that user searches for, makes it possible to search for city in api call
        vm.format = function() {

            //********vm.cityName tied (ng-model) with city search input 
            var name = vm.cityName;

            //replace spaces with no spaces
            var changed = name.replace(" ", "");

            //make it lower case
            changed = changed.toLowerCase();

            //new variable name to pass to api call
            vm.newWeather(changed);
        };

        //function to get weather from api for specific city searched for,
        //variable "city" passed in from variable "changed" format function above
        //variable "city" also potentially passsed from preset buttons
        vm.newWeather = function(city) {

            var first = 'http://api.openweathermap.org/data/2.5/weather?q=';
            var appId = '&units=imperial&APPID=fbe8d3c5bbdf529fc2c01b2859b54fa3';
            var url = first + city + appId;

            //pass url created above for new city to the factory 
            WeatherFactory.getWeather(url).then(
                function(response) {

                    //assign vm.weather to response from api call
                    vm.weather = response.data;

                    //add History
                    addHistory(vm.weather.name, moment().format('MM-DD-YY h:mm:ss a'));
                },
                function(error) {
                    $log.error(error);
                });


        };
    }
})();
