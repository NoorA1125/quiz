/*
taking a code quiz
click the start button - Done
    timer starts  - Done
    presented with a question

Answer a question
    presented with another question
        answer incorrectly
        time is subtracted 

All questions are answered or the timer reaches 0
    the game is over

WHEN the game is over
    save my initials and my score

*/

var startButton = document.getElementById("startButton");
//var submitButton = document.querySelector("#submit-button");
//var results = document.querySelector("#results");
var timeText = document.querySelector("#time");
var timeLeft = 30;

/* Creating questionaires for the Quiz - Programming related*/
var quizQuestions = [
    {
    question: "Which is the proper way to link a JS file to a HTML file?",
    answers: {
        a: "<script src="+"script.js" + "></script>",
        b: "<style href="+"script.js" +"></style>",
        c: "<img src="+"script.js"+">",
        d: "<script href="+"script.js" + "></script>"
    },
    correctAnswer:"a"
},
{
    question: "Which is the proper way to link a JS file to a HTML file?",
    answers: {
        a: "<script src="+"script.js" + "></script>",
        b: "<style href="+"script.js" +"></style>",
        c: "<img src="+"script.js"+">",
        d: "<script href="+"script.js" + "></script>"
    },
    correctAnswer:"a"
},
{
    question: "Which is the proper way to link a JS file to a HTML file?",
    answers: {
        a: "<script src="+"script.js" + "></script>",
        b: "<style href="+"script.js" +"></style>",
        c: "<img src="+"script.js"+">",
        d: "<script href="+"script.js" + "></script>"
    },
    correctAnswer:"a"
},
{
    question: "Which is the proper way to link a JS file to a HTML file?",
    answers: {
        a: "<script src="+"script.js" + "></script>",
        b: "<style href="+"script.js" +"></style>",
        c: "<img src="+"script.js"+">",
        d: "<script href="+"script.js" + "></script>"
    },
    correctAnswer:"a"
},


]
function startQuiz (){
    //Trigger the start button to start the timer
    startButton.addEventListener("click", timer());
}

function timer() {
    timeText.textContent= timeLeft;
    var timed = setInterval(function(){
        timeLeft--;
        timeText.textContent = timeLeft + " seconds left";
        if (timeLeft === 0) {
            clearInterval(timed);
            alert("You Lost!");
        }
    }, 1000);
    
}

startQuiz;