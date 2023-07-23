
var numGuesses = document.getElementById("num-guesses");

var guessedNum = document.getElementById("guessed-num");

var msg = document.getElementById("msg");


function genertateGuess() {
    return Math.floor(Math.random() * 100) + 1;
}

var randNum = genertateGuess();

var numOfGuesses = 0;
var guessedNums = [];


function runGuess() {

    var userGuess = document.getElementById("guess-field").value;

    if(userGuess < 1 || userGuess > 100) {
        alert("Please choose a valid number in the range 1 - 100.");
    } else {
        guessedNums.push(userGuess);
        numOfGuesses += 1;

        if(userGuess < randNum){
            numGuesses.textContent = "Your Guess is Too Low";
            guessedNum.textContent = "No of Guesses : " + numOfGuesses;
            msg.textContent = "Guessed Number are : " + guessedNums;
        }

        else if (userGuess > randNum){
            numGuesses.textContent = "Your Guess is Too High";
            guessedNum.textContent = "No of Guesses : " + numOfGuesses;
            msg.textContent = "Guessed Number are : " + guessedNums;
        }

        else if(userGuess == randNum){
            numGuesses.textContent = "Your Guess is Correct ✔";
            guessedNum.textContent = "The Number is : " + randNum;
            msg.textContent = "You guessed it in " + numOfGuesses + " guesses";
        }
    }
}


function reset() {
    document.getElementById("guess-field").value = "";

    numGuesses.textContent = "Number of Guesses : 0";

    guessedNum.textContent = "Guessed number are : none";

    msg.textContent = "";

    randNum = genertateGuess();
}