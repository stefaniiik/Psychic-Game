alert("You have 9 guesses! Guess A-Z!")

// Computer has 26 letters to choose from
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
    "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// Variables for the text in HTML
var wins = 0;
var losses = 0;
var numGuesses = 9;
var guessesLeft = 9;
var guessedSoFar = [];

var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];

// When user presses a key
document.onkeyup = function(event) {
        var userGuess = event.key
        console.log(userGuess)
        // User wins
         if (userGuess == computerChoice){
            wins++;
            document.getElementById('wins').innerHTML = "Wins:" + wins;
}
// User loses
if  (guesses === 0 ){
    losses++;
    document.getElementById('losses').innerHTML = "Losses:" + losses;
}
// Guesses left
 else  {
    guessesLeft--;
    document.getElementById('guessesLeft').innerHTML = "Guesses left:" + guessesLeft;
}
// Guesses

document.getElementById('numGuesses').innerHTML = "Guesses so far" + numGuesses;
}