(function() {
    'use strict';

    // define top-level module container
    var app = angular.module('app', ['ui.router']);

    // additional configuration goes here

    app.config(function($stateProvider, $urlRouterProvider, $httpProvider) {

        // For any unmatched url, redirect to /state1
        $urlRouterProvider.otherwise("/main");
        //
        // Now set up the states
        $stateProvider
            .state('main', {
                url: "/main",
                templateUrl: "app/partials/main.html"
            })
            .state('main.state1', {
                url: "/state1",
                templateUrl: "app/partials/main.state1.html",
                controller: "State1Controller as vm"
            })
            .state('main.state2', {
                url: "/state2",
                templateUrl: "app/partials/main.state2.html",
                controller: "State2Controller as vm"
            })
            .state('main.state3', {
                url: "/state3",
                templateUrl: "app/partials/main.state3.html",
                controller: "State3Controller as vm"
            })
            .state('main.state4', {
                url: "/state4",
                templateUrl: "app/partials/main.state4.html",
                controller: "State4Controller as vm"
            })
            .state('main.state5', {
                url: "/state5",
                templateUrl: "app/partials/main.state5.html",
                controller: "State5Controller as vm"
            })
            .state('main.state6', {
                url: "/state6",
                templateUrl: "app/partials/main.state6.html",
                controller: "State6Controller as vm"
            })
            .state('main.state7', {
                url: "/state7",
                templateUrl: "app/partials/main.state7.html",
                controller: "State7Controller as vm"
            })
            .state('main.state7.list', {
                url: "/list/:movieName",
                templateUrl: "app/partials/main.state7.list.html",
                controller: "State7DetailController as vm"
            })

    })

})();
