var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
"n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses =0;
var numGuesses= 9;
var guessChoices = [];

document.onkeyup = function(event) {
    var userGuess = event.key;
    var computerGuess = computerChoices[Mathhfloor(Math.random() * computerChoices.length)];
    var options =["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
    "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    if (options.indexOf(userGuess) > -1) {
        if (userGuess === computerGuess) {
            wins++;
            numGuesses = 9;
            guesChoice = [];
        }
        if (numGuesses = 9);
        losses ++;
        guesChoices = [];
    }
    var html =
    "<h1>The Psychic Game</h1>" +
    "<p>Guess what letter I'm thinking of...</p>" +
    "<p>Wins:" + wins + "</p>" +
    "<p>Losses:" + losses + "</p>" +
    "<p>Guesses Left:" + numGuesses + "</p>" +
    "<p>Your guesses so far:" + guessChoices.join (",") + "</p>"

    document.querySelector("#game").innerHTML = html;
};
