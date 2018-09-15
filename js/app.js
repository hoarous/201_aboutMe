"use strict";
alert('Let\'s play a guessing game!');

//FIVE YES/NO QUESTIONS

//initialize questions
var questions = ['Do I have any pets?', 
    'Have I ever traveled abroad?', 
    'Do I have any siblings?',
    '',
    ''];
//initialize feedback
var feedback = ['I have a cat.',
    'I have been to Mexico, Canada, and China.',
    'I am an only child.',
    '',
    '']
//initialize correct answers
var answerKey = ['YES', 'YES', 'NO','',''];
//initialize responses
var responses = new Array(5);
//initialize number of correct responses
var correct = 0;

for(var i = 0; i < questions.length; i++){
    responses[i] = prompt(questions[i]);
    responses[i] = responses[i].toUpperCase();
    console.log(questions[i] + ' answered: ' + responses[i]);
    
    while(responses[i] !== 'YES' && responses[i] !== 'Y' && responses[i] !== 'NO' && responses[i] !== 'N'){
        responses[i] = prompt('Please answer yes or no.');
        responses[i] = responses[i].toUpperCase();
        console.log(questions[i] + ' answered ' + responses[i]);
    }
    
    if(responses[i] === answerKey[i] || responses[i] === answerKey[i].substring(0,1)){
        correct++;
        alert('That\'s correct! ' + feedback[i]);
    }else{
        alert('Sorry, wrong answer! ' + feedback[i]);
    }

    console.log(correct + ' questions answered correctly.');
}



// RANDOM NUMBER QUESTION
var min = Math.ceil(1);
var max = Math.floor(10);
var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randomNumber);

var guessCounter = 4;
var guessedNumber;

do{
    guessedNumber = prompt('I\'m thinking of a number 1 - 10. Guess what number I\'m thinking of.');
    guessedNumber = parseInt(guessedNumber);
    console.log(guessedNumber, randomNumber, guessedNumber !== randomNumber);
    guessCounter--;

    if(guessedNumber > randomNumber){
        alert('Too high! You have ' + guessCounter + ' more guesses.');
    }else if (guessedNumber < randomNumber){
        alert('Too low! You have ' + guessCounter + ' more guesses.');
    }else{
        alert('good job, you got it!');
        correct++;
    }
}while (guessedNumber !== randomNumber && guessCounter > 0);

if(guessCounter === 0){
    alert('you didn\'t get the correct number, it was ' + randomNumber);
}


//MULTIPLE CORRECT ANSWER QUESTION



 alert('You answered ' + correct + ' questions correctly. Congratulations!');