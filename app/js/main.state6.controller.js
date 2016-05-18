(function() {
    'use strict';

    angular
        .module('app')
        .controller('State6Controller', State6Controller);

    State6Controller.$inject = ['$log', 'WeatherFactory'];



    /* @ngInject */
    function State6Controller($log, WeatherFactory)
    {
        var vm = this;
        vm.title = 'State6Controller';
        vm.histories=[];
        activate();
        vm.cityName = '';

        function addHistory(name, time)
        {

            vm.histories.push(
            {
                'name': name,
                'time': time,      
            });


        };

        vm.format = function()
        {

            var name = vm.cityName;
            var changed = name.replace(" ", "");
            changed = changed.toLowerCase();
            vm.newWeather(changed);
        };

        vm.newWeather = function(city)
        {
            
            var first = 'http://api.openweathermap.org/data/2.5/weather?q=';
            var appId = '&units=imperial&APPID=fbe8d3c5bbdf529fc2c01b2859b54fa3';
            var url = first + city + appId;


            WeatherFactory.getWeather(url).then(
                function(response)
                {
                    vm.weather = response.data;
                    addHistory(vm.weather.name, moment().format('MM-DD-YY h:mm:ss a'));
                },
                function(error)
                {
                    $log.error(error);
                });
           

        };

        function activate()
        {

            WeatherFactory.getWeather('http://api.openweathermap.org/data/2.5/weather?q=palmsprings&units=imperial&APPID=fbe8d3c5bbdf529fc2c01b2859b54fa3').then(
                function(response)
                {
                    vm.weather = response.data;
                    addHistory(vm.weather.name, moment().format('MM-DD-YY h:mm:ss a'));
                },
                function(error)
                {
                    $log.error(error);
                });

        };
    }
})();
