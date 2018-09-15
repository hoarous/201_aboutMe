"use strict";

//helper functions
var randomNumber= function(lower, higher){
    var min = Math.ceil(higher);
    var max = Math.floor(lower);
    var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber;
}

var username = function(){
    var username;
    do{
        username = prompt('What is your name?');
    }while(!username)

    return username;
}

name = username();

alert('Hello ' + name + ', let\'s play a guessing game!');

//FIVE YES/NO QUESTIONS

//initialize questions
var questions = ['Do I have any pets?', 
    'Have I ever traveled abroad?', 
    'Do I have any siblings?',
    'Do I play any instruments?',
    'Do I play any sports?'];
//initialize feedback
var feedback = ['I have a cat.',
    'I have been to Mexico, Canada, and China.',
    'I am an only child.',
    'I play piano and flute.',
    'I hate exercise!']
//initialize correct answers
var answerKey = ['YES', 'YES', 'NO','YES','NO'];
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

var guessCounter = 4;
var guessedNumber;
var randomNum = randomNumber(1,10);

do{
    guessedNumber = prompt('I\'m thinking of a number 1 - 10. Guess what number I\'m thinking of.');
    guessedNumber = parseInt(guessedNumber);
    console.log(guessedNumber, randomNum, guessedNumber !== randomNum);
    guessCounter--;

    if(guessedNumber > randomNum){
        alert('Too high! You have ' + guessCounter + ' more guesses.');
    }else if (guessedNumber < randomNum){
        alert('Too low! You have ' + guessCounter + ' more guesses.');
    }else if (guessedNumber === randomNum){
        alert('Good job, you got it!');
        correct++;
    }else{
        alert('Come on, guess a number 1-10! you have ' + ' more guesses.');
    }
}while (guessedNumber !== randomNum && guessCounter > 0);

if(guessCounter === 0){
    alert('You didn\'t get the correct number, it was ' + randomNum + '.');
}


//MULTIPLE CORRECT ANSWER QUESTION
var states = ['california','north carolina','pennsylvania'];
var guesses;
guessCounter = 6;

do{
    guesses = prompt('what other states do you think i\'ve lived in besides washington?');
    guessCounter--;
}while(!states.includes(guesses)&& guessCounter>0);

if (states.includes(guesses)){
    correct++;
    alert('that\'s right, I have lived in washington, california, north caroliana and pennsylvania.');
}else{
    alert('sorry!');
}


 alert('You answered ' + correct + ' questions correctly. Congratulations!');