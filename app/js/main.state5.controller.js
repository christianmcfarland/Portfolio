(function() {
    'use strict';

    angular
        .module('app')
        .controller('State5Controller', State5Controller);

    State5Controller.$inject = ['ShuffleFactory', '$timeout'];


    //main controller
    function State5Controller(ShuffleFactory, $timeout) {

        var vm = this;
        var matches = 0;
        var currentSessionOpen = false;
        var previousCard = null;
        var numPairs = 0;

        vm.cards = [];

        var images = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];

        vm.createCards = function() {

            for (var i = 0; i < 18; i++) {
                var card = {};
                var value = Math.floor((Math.random() * images.length));
                card.value = images[value] + '.jpg';
                card.index = images[value];
                card.cardIsFlipped = false;
                vm.cards.push(card);
                images.splice(value, 1);
            }

            images = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
            for (var i = 0; i < 18; i++) {
                var card = {};
                var value = Math.floor((Math.random() * images.length));
                card.value = images[value] + '.jpg';
                card.index = images[value] + 18;
                card.cardIsFlipped = false;
                vm.cards.push(card);
                images.splice(value, 1);
            }
        };
        vm.createCards();


        vm.currentCards = [];

        vm.initialClick = function(card) {
            if (vm.currentCards.length === 0) {
                vm.currentCards.push(card);
                card.cardIsFlipped = true;
            } else if (vm.currentCards.length === 1) {
                vm.currentCards.push(card);
                card.cardIsFlipped = true;
                $timeout(compareCards, 750);
            } else {
                card.cardIsFlipped = false;
                alert('slow down!');
            };

            console.log(vm.currentCards);

        }

        var compareCards = function() {
            if (vm.currentCards[0].value === vm.currentCards[1].value) {
                matches++;
                checkMatches();
                vm.currentCards = [];
            } else {
                vm.currentCards[0].cardIsFlipped = false;
                vm.currentCards[1].cardIsFlipped = false;
                vm.currentCards = [];
            }
        };

        var checkMatches = function() {
            if (matches === 18) {
                alert('You have won the game!');
                vm.cards=[];
                vm.createCards();
            } else {
                alert("nice!");
            }
        }
    }
})();
