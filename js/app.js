"use strict";

//initialize number of correct responses
var totalCorrect = 0;

//helper function
var randomNumber = function(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
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
var yesNoArray = function(){
    //initialize number of correct answers
    var correct = 0;
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
    return correct;

}

totalCorrect = totalCorrect + yesNoArray();

// RANDOM NUMBER QUESTION
var guessRandom = function(){
    var guessCounter = 4;
    var guessedNumber;
    var randomNum = randomNumber(1,10);
    var correct = 0;

    do{
        guessedNumber = prompt('I\'m thinking of a number 1 - 10. Guess what number I\'m thinking of.');
        guessedNumber = parseInt(guessedNumber);
        console.log(guessedNumber, randomNum, guessedNumber !== randomNum, guessCounter);
        guessCounter--;

        if(guessedNumber > randomNum){
            alert('Too high! You have ' + guessCounter + ' more guesses.');
        }else if (guessedNumber < randomNum){
            alert('Too low! You have ' + guessCounter + ' more guesses.');
        }else if (guessedNumber === randomNum){
            alert('Good job, you got it!');
            correct++;
        }else{
            alert('Come on, guess a number 1-10! you have ' + guessCounter + ' more guesses.');
        }
    }while (guessedNumber !== randomNum && guessCounter > 0);

    if(guessedNumber !== randomNum){
        alert('You didn\'t get the correct number, it was ' + randomNum + '.');
    }
    return correct;
}

totalCorrect = totalCorrect + guessRandom();


//MULTIPLE CORRECT ANSWER QUESTION
var guessStates = function(){
    var states = ['CALIFORNIA','NORTH CAROLINA','PENNSYLVANIA'];
    var guessCounter = 6;
    var correct = 0;

    //first guess outside of loop
    var guess = prompt('What other states do you think i\'ve lived in besides Washington?');
    guess = guess.toUpperCase();
    console.log('States: ' + guess + ' remaining: ' + guessCounter);
    guessCounter--;

    //loop for additional guesses
    while(!states.includes(guess) && guessCounter > 0){
        guess = prompt('Nope! You have ' + guessCounter + ' more guesses.');
        guess = guess.toUpperCase();
        console.log('States: ' + guess + ' remaining: ' + guessCounter);
        guessCounter--;
    };

    //final feedback on state guessing
    if (states.includes(guess)){
        correct++;
        alert('That\'s right! I have lived in Washington, California, North Carolina, and Pennsylvania.');
    }else{
        alert('Sorry! I\'ve lived in Washington, California, Pennsylvania, and North Carolina.');
    }
    
    return correct;
}

totalCorrect = totalCorrect + guessStates();

 alert('You answered ' + totalCorrect + ' questions correctly. Congratulations!');
