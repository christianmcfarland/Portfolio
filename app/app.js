(function() {
    'use strict';

    // define top-level module container
    var app = angular.module('app', ['ui.router', 'LocalStorageModule', 'toastr', 'ngAnimate']);

    // additional configuration goes here
    app.config(function($stateProvider, $urlRouterProvider, $httpProvider) {
        // For any unmatched url, redirect to /main
        $urlRouterProvider.otherwise("main");
        // Now set up the states
        $stateProvider
            .state("register", {
                url: "/register",
                templateUrl: "app/8Chirper/register.html",
                controller: "RegisterController as register"
            })
            .state("login", {
                url: "/login",
                templateUrl: "app/8Chirper/login.html",
                controller: "LoginController as login"
            })
            .state("main", {
                url: "/main",
                templateUrl: "app/Main/main.html",
                controller: "MainController as vm"
            })
            .state("main.state2", {
                url: "/state2",
                templateUrl: "app/2AstroCalc/main.state2.html",
                controller: "State2Controller as vm"
            })
            .state("main.state3", {
                url: "/state3",
                templateUrl: "app/3MortgageCalc/main.state3.html",
                controller: "State3Controller as vm"
            })
            .state("main.state4", {
                url: "/state4",
                templateUrl: "app/4ChangeCalc/main.state4.html",
                controller: "State4Controller as vm"
            })
            .state("main.state5", {
                url: "/state5",
                templateUrl: "app/5MemoryGame/main.state5.html",
                controller: "State5Controller as vm"
            })
            .state("main.state6", {
                url: "/state6",
                templateUrl: "app/6WeatherApp/main.state6.html",
                controller: "State6Controller as vm"
            })
            .state("main.state7", {
                url: "/state7",
                templateUrl: "app/7MovieFinder/main.state7.html",
                controller: "State7Controller as vm"
            })
            .state("main.state7.list", {
                url: "/list/:movieName",
                templateUrl: "app/7MovieFinder/main.state7.list.html",
                controller: "State7DetailController as vm"
            })
            .state("state8", {
                url: "/state8",
                templateUrl: "app/8Chirper/state8.html",
                controller: "State8Controller as vm"
            })
            .state("state8.main", {
                url: "/main",
                templateUrl: "app/8Chirper/state8.main.html"
            })
            .state("state8.todo", {
                url: "/todo",
                templateUrl: "app/8Todo/state8.todo.html"
            })

        $httpProvider.interceptors.push('authInterceptor');
    })

    //
    app.value('apiUrl', 'http://localhost:50341/api/');

})();
