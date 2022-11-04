'use strict';
/*
    java script

    Guessing game

*/
function select(selector, parent = document) {
    return parent.querySelector(selector);
}
function onEvent(event, selector, callback) {
    return selector.addEventListener(event, callback);
}

function getElement(selector, parent = document) {
    return parent.getElementById(selector);

}

let msg1 = select('.message1');
let msg2 = select('.message2');
let msg3 = select('.message3');
let userGuess = select('.guess').value;
const btn = select('.my_btn');
const restart= select('.restart');


let answer = Math.floor(Math.random() * 100) + 1;
let noOfGuess = 8;
let guessedNums = [];


onEvent('click', btn, function () {

    let userGuess = select('.guess').value;
    
    if (userGuess < 1 || userGuess > 100) {
        alert('Please Enter number between 1 to 100');
    }
    else {
        guessedNums.push(userGuess);
        noOfGuess -= 1;

        if (userGuess > answer && noOfGuess >= 0) {
            msg1.innerText = "Your guess is too low.";
            msg2.innerText = "No. of guesses left : " + noOfGuess;
            msg3.innerText = "Guessed numbers are: " + guessedNums;
            userGuess.value = '0 ';
        } else if (userGuess < answer && noOfGuess >= 0) {
            msg1.innerText = "Your guess is too high.";
            msg2.innerText = "No. of guesses left: " + noOfGuess;
            msg3.innerText = "Guessed numbers are: " + guessedNums;
            userGuess.value = ' 0';
        } else if (userGuess == answer && noOfGuess >= 0) {
            msg1.innerText = "You Won ";
            msg2.innerText = "The number was: " + answer;
            msg3.innerText = "You Guessed numbers in  " + noOfGuess + "guesses";
            userGuess.value = ' 0';
            
            

        } else if ( noOfGuess = 0 && userGuess == answer){
            alert('Play Again !');
        }
    }
    
    
});

onEvent('click', restart , function(){
        userGuess = select('.guess').value;
        msg1.innerText = "Play Again ";
        msg2.innerText = ' TRY AGAIN';
        msg3.innerText =  '' ;
        userGuess = ' ';

});

