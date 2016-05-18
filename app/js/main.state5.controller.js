(function() {
    'use strict';

    angular
        .module('app')
        .controller('State5Controller', State5Controller);

    State5Controller.$inject = ['ShuffleFactory'];


    //main controller
    function State5Controller(ShuffleFactory) {

        var vm = this;

        var currentSessionOpen = false;
        var previousCard = null;
        var numPairs = 0;


        vm.cards = [];



        var images = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];

        vm.createCards = function() {

            for (var i=0; i<18; i++) {
                var card = {};
                var value = Math.floor((Math.random() * images.length));
                card.value = images[value] + '.jpg';
                card.index = images[value];
                card.cardIsFlipped = false;
                vm.cards.push(card);
                images.splice(value, 1);
                console.log(card);
            }

            images = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
            for (var i=0; i<18; i++) {
                var card = {};
                var value = Math.floor((Math.random() * images.length));
                card.value = images[value] + '.jpg';
                card.index = images[value] + 18;
                card.cardIsFlipped = false;
                vm.cards.push(card);
                images.splice(value, 1);
                console.log(card);
            }
        };
        vm.createCards();
    }
})();
