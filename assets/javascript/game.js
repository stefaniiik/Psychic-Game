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
var allowedGuess = 9;

var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
if (numGuesses <0){numGuesses=9;}
// When user presses a key
document.onkeyup = function(event) {
        var userGuess = event.key
        // console.log(userGuess)
        // User wins
         if (userGuess == computerChoice){
            wins++;
            document.getElementById('wins').innerHTML = "Wins:" + wins;
}
// User loses
if  (userGuess === 0 ){
    losses++;
    document.getElementById('losses').innerHTML = "Losses:" + losses;
}
// Guesses left
 else  {
    guessesLeft--;
    document.getElementById('guessesLeft').innerHTML = "Guesses left:" + guessesLeft;
}
// Guesses
guessedSoFar.push(userGuess);
// console.log(guessedSoFar);
document.getElementById('guessedSoFar').innerHTML = "Guesses so far:" + "<p>" + guessedSoFar;
}
