(function() {
    'use strict';

    angular
        .module('app')
        .controller('State5Controller', State5Controller);

    State5Controller.$inject = ['$timeout'];


    //main controller
    function State5Controller($timeout) {

        //using vm
        var vm = this;

        //empty variable to hold number of matches
        var matches = 0;

        //empty variable to hold cards before shuffle
        vm.cards = [];

        //images in /app/images... are named by numbers 1-18
        var images = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];

        vm.createCards = function() {

            for (var i = 0; i < 18; i++) {
                //temporary variable to hold single card we are creating
                var card = {};
                //random number to index through images
                var value = Math.floor((Math.random() * images.length));
                //make the value of the card a rndom image number from the array
                card.value = images[value] + '.jpg';
                //assign an index to make it unique from it's counterpart in the next set of cards below
                card.index = images[value];
                //assign the cardIsFlipped value to the default, false
                card.cardIsFlipped = false;
                //add complete card to cards array
                vm.cards.push(card);
                //remove selection from the array so you don't pick it twice
                images.splice(value, 1);
            }

            //repeat the above process with one minor difference
            images = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
            for (var i = 0; i < 18; i++) {
                var card = {};
                var value = Math.floor((Math.random() * images.length));
                card.value = images[value] + '.jpg';
                //add 18 to the index number so that the card is different than it's counterpart in previous set of 18 cards
                card.index = images[value] + 18;
                card.cardIsFlipped = false;
                vm.cards.push(card);
                images.splice(value, 1);
            }
        };
        vm.createCards();

        //empty array to hold cards that have been selected
        vm.currentCards = [];

        //when you click a card:
        vm.initialClick = function(card) {
            //check if there have been any cards selected
            if (vm.currentCards.length === 0) {
                //if no cards selected, add card to currentCards array and show face of card
                vm.currentCards.push(card);
                card.cardIsFlipped = true;
            } else if (vm.currentCards.length === 1) {
                //if one card selected, add card to currentCards array and show face of card
                vm.currentCards.push(card);
                card.cardIsFlipped = true;
                //pause for 750ms and then run function to compare two selected cards
                $timeout(compareCards, 750);
            } else {
                //if two cards already selected, do not show face of third card, alert user to slow down
                card.cardIsFlipped = false;
                alert('slow down!');
            };


        }

        //compare cards when two have been selected
        var compareCards = function() {
            //if the two cards in the array have the same value, leave cards face up
            //add 1 to the matches variable
            //check how many matches have been made by running checkMatches()
            //empty currentCards array 
            if (vm.currentCards[0].value === vm.currentCards[1].value) {
                matches++;
                checkMatches();
                vm.currentCards = [];
            } else {
                //if they do not have the same value, turn the carads back over
                //clear currentCards array
                vm.currentCards[0].cardIsFlipped = false;
                vm.currentCards[1].cardIsFlipped = false;
                vm.currentCards = [];
            }
        };


        var checkMatches = function() {
            //if there have been 18 matches
            //alert user they have won the game
            //clear the cards array
            //reset the cards
            if (matches === 18) {
                alert('You have won the game!');
                vm.cards = [];
                vm.createCards();
            } else {
                //if there have not been 18 matches, just tell the user "Nice!"
                alert("nice!");
            }
        };
    }
})();
