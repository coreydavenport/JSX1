var correct = 0;

var answer1 = prompt('What is javascript on the the serverside called?');
if (answer1.toUpperCase() === 'NODE.JS'){
	correct += 1;
};

var answer2 = prompt('What language is used to interact with the front end?');
if (answer2.toUpperCase() === 'JAVASCRIPT'){
	correct += 1;
};

var answer3 = prompt('What language uses media queries?');
if (answer3.toUpperCase() === 'CSS'){
	correct += 1;
};

var answer4 = prompt('What language is used for markup?');
if (answer4.toUpperCase() === 'HTML'){
	correct += 1;
};

var answer5 = prompt('True and False are examples of');
if (answer5.toUpperCase() === 'BOOLEAN'){
	correct += 1;
};

document.write('<p>You got ' + correct + ' questions out of 5 correct!</p>');

if (correct == 5){
	document.write('<p>You got gold!</p>');
} else if (correct >= 3) {
	document.write('<p>Yo got silver!</p>');
}else if (correct >= 1){
	document.write('<p>You got bronze!</p>');
}else{
	document.write('<p>No crown for loser</p>');
};