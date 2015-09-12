// Random Number Guessing Game Exercise

var correctGuess = false;
var randomNum = Math.floor(Math.random() * 6) + 1;
var guess = prompt('I\'m thinking of a number between 1 and 6. Can you guess?');
if (parseInt(guess) === randomNum){
	correctGuess = true;
}else if ( parseInt(guess) < randomNum) {
	var guessAgain = prompt('Guess higher. The number I\'m thinking of is greater than ' + guess);
	if (parseInt(guessAgain) == randomNum) {
		correctGuess = true;
	}
}else if ( parseInt(guess) > randomNum){
	var guessLower = prompt('Guess lower. The number I\'m thinking of is less than ' + guess);
	if (parseInt(guessLower) == randomNum) {
		correctGuess = true;
	}

}
if ( correctGuess ) {
	document.write('You\'re Correct! The number I was thinking of was ' + randomNum);
} else {
	document.write('WRONG! it was ' + randomNum);
}