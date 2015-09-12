// Random Number Guessing Game Exercise

var randomNum = Math.floor(Math.random() * 6) + 1;
var guess = prompt('I\'m thinking of a number between 1 and 6. Can you guess?');

if (parseInt(guess) === randomNum) {
	document.write('You\'re Correct!');
} else {
	document.write('WRONG! it was ' + randomNum);
}