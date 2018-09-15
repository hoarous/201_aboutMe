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
    responses[i] = prompt(questions[i])
    responses[i] = responses[i].toUpperCase();
    console.log(questions[i] + ' answered: ' + responses[i]);
    
    while(responses[i] !== 'YES' && responses[i] !== 'Y' && responses[i] !== 'NO' && responses[i] !== 'N'){
        responses[i] = prompt('Please answer yes or no.');
        responses[i] = responses[i].toUpperCase();
        console.log(questions[i] + ' answered ' + responses[i]);
    }
    
    if(responses[i] === answerKey[i] || responses[i] === answerKey[i].substring(0,0)){
        correct++;
        alert('That\'s correct! ' + feedback[i]);
    }else{
        alert('Sorry, wrong answer! ' + feedback[i]);
    }

    console.log(correct + ' questions answered correctly.');
}


/*
// pet question
var pets = prompt('Do I have any pets?');
if(pets.toUpperCase()==='YES'||pets.toUpperCase()==='Y'){
    alert('That\'s right! I have a cat.');
    console.log('pets answered correctly.');
}else if(pets.toUpperCase()==='NO'||pets.toUpperCase()==='N'){
    alert('Sorry, wrong answer!');
    console.log('pets answered incorrectly.');
}else{
    alert('These are yes or no questions, answer yes or no!');
    console.log('pets not answered.');
}


// travel question
var travel = prompt('Have I ever traveled abroad?');
if(travel.toUpperCase()==='YES'||travel.toUpperCase()==='Y'){
    alert('I have traveled to Mexico, Canada, and China.');
    console.log('travel answered correctly.');
}else if(travel.toUpperCase()==='NO'||travel.toUpperCase()==='N'){
    alert('Sorry, wrong answer!');
    console.log('travel answered incorrectly');
}else{
    alert('These are yes or no questions, answer yes or no!');
    console.log('travel not aswered.');
}


// siblings question
var siblings = prompt('Do I have any siblings?');
if(siblings.toUpperCase()==='YES'||siblings.toUpperCase()==='Y'){
    alert('Sorry, wrong answer!');
    console.log('siblings answered incorrectly.');
}else if(siblings.toUpperCase()==='NO'||siblings.toUpperCase()==='N'){
    alert('Correct! I am an only child.');
    console.log('siblings answered correctly');
}else{
    alert('These are yes or no questions, answer yes or no!');
    console.log('siblings not aswered.');
}


// RANDOM NUMBER QUESTION
var min = Math.ceil(1);
var max = Math.floor(10);
var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randomNumber);

var guessCounter = 4;
var guessedNumber;

do{
    guessedNumber = prompt('pick a number 1 - 10');
    guessedNumber = parseInt(guessedNumber);
    console.log(guessedNumber, randomNumber, guessedNumber !== randomNumber);
    guessCounter--;
}while (guessedNumber !== randomNumber && guessCounter > 0);

if(guessCounter === 0){
    alert('you didn\'t get the correct number, it was ' + randomNumber);
}else{
    alert('good job, you got it!');
    correct++;
}

//MULTIPLE CORRECT ANSWER QUESTION

 */