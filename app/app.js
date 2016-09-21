(function() {
    'use strict';

    // define top-level module container
    var app = angular.module('app', ['ui.router', 'LocalStorageModule', 'toastr', 'ngAnimate']);

    // additional configuration goes here
    app.config(function($stateProvider, $urlRouterProvider, $httpProvider) {
        // For any unmatched url, redirect to /main
        $urlRouterProvider.otherwise("home");
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
            .state("home", {
                url: "/home",
                templateUrl: "app/Home/home.html",
                controller: "HomeController as vm"
            })
            .state("home.state2", {
                url: "/state2",
                templateUrl: "app/2AstroCalc/home.state2.html",
                controller: "State2Controller as vm"
            })
            .state("home.state3", {
                url: "/state3",
                templateUrl: "app/3MortgageCalc/home.state3.html",
                controller: "State3Controller as vm"
            })
            .state("home.state4", {
                url: "/state4",
                templateUrl: "app/4ChangeCalc/home.state4.html",
                controller: "State4Controller as vm"
            })
            .state("home.state5", {
                url: "/state5",
                templateUrl: "app/5MemoryGame/home.state5.html",
                controller: "State5Controller as vm"
            })
            .state("home.state6", {
                url: "/state6",
                templateUrl: "app/6WeatherApp/home.state6.html",
                controller: "State6Controller as vm"
            })
            .state("home.state7", {
                url: "/state7",
                templateUrl: "app/7MovieFinder/home.state7.html",
                controller: "State7Controller as vm"
            })
            .state("home.state7.list", {
                url: "/list/:movieName",
                templateUrl: "app/7MovieFinder/home.state7.list.html",
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
