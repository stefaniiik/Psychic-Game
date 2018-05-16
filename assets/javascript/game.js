// Computer has 26 letters to choose from
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
"n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// Variables for the text in HTML
var wins = 0;
var losses = 0;
var numGuesses = 9;
var guessesLeft = 9;
var guessChoices = [];
var letterToGuess = null;
// Computer selects a random letter
var computerGuess = computerChoices [Math.floor (Math.random() * computerChoices.length)];

var updateGuessesLeft = function () {
// Guesses left
document.querySelector('#guessLeft').innerHTML = "Guesses left:" + guessesLeft;
};
var updateLetterToGuess = function () {
    updateLetterToGuess.letterToGuess = computerChoices [Math.random() * computerChoices.length];
} 
    // Guesses tried
var updateGuesses = function(){
    document.querySelector('#let').innerHTML = "Your Guesses so far:" + guessChoices.join(',');
};
// reset
var reset = function () {
    numGuesses = 9;
    guessesLeft = 9;    
    guessChoices = [];

    updateLetterToGuess();
    updateGuessesLeft();
    updateGuesses();
}

    updateLetterToGuess ();
    updateGuessesLeft();

// Key released function
document.onekeyup = function(event) {
    guessesLeft--;
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

    guessedLetters.push(userGuess);
    updateGuessesLeft();
    updateGuesses();
    // if correct letter guessed - wins go up
        if (guessesLeft > 0) {
            if (userGuess == letterToGuess){
                wins++;
                document.querySelector('#wins').innerHTML = "Wins:" + wins;
                resent();
            }
        }
        // if wrong letter guessed - losses go up
        else if (guessesLeft == 0){
            losses++;
            document.querySelector('#losses').innerHTML = "Losses:" + losses;
            reset();
        }
        };