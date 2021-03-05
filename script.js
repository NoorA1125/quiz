
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
var submitButton = document.querySelector("#submit-button");
var results = document.querySelector("#results");
var timeText = document.querySelector("#time");
var timeLeft = 30;
var quizContainer = document.querySelector("#quizQuestions");
var quizResults = document.querySelector("#results");
let shuffledQuestions, currentQuestionIndex

/* Creating questionaires for the Quiz - Programming related*/
var quizQuestions = [
    {
        question: "Which is the proper way to link a JS file to a HTML file?",
        answers: {
            a: "<script src=" + "script.js" + "></script>",
            b: "<style href=" + "script.js" + "></style>",
            c: "<img src=" + "script.js" + ">",
            d: "<script href=" + "script.js" + "></script>"
        },
        correctAnswer: "a"
    },
    {
        question: "Can you have multple <header> & <footer> tags in a single page?",
        answers: {
            a: "Yes",
            b: "No",
        },
        correctAnswer: "a"
    },
    {
        question: "What does CSS stand for?",
        answers: {
            a: "Come Science Simpleified",
            b: "Cascading Style Sleeps",
            c: "Cascading Style Sheets",
            d: "Cascading Style Sheet"
        },
        correctAnswer: "c"
    },
    {
        question: "What are the 3 main skillsets needed to become a mordern day Front-End Developer?",
        answers: {
            a: "HTML, CSS6, Java",
            b: "JavaScript, XML, Cascading Style Sheets",
            c: "Cascading Style Sheets, HTML, React",
            d: "HTML, JavaScript, Cascading Style Sheets"
        },
        correctAnswer: "d"
    },
    {
        question: "Order these headings in the correct order: Largest > Smallest",
        answers: {
            a: "H1, H2, H3, H4, H5, H6, H7, H8",
            b: "H1, H2, H3, H4, H5, H6, H7",
            c: "H1, H2, H3, H4, H5, H6",
            d: "H1, H2, H3, H4, H5,"
        },
        correctAnswer: "c"
    },


];

function startQuiz() {
    startButton.addEventListener("click", timer());
    shuffledQuestions = quizQuestions.sort(() => Math.random() - 0.5) //shuffles the questions randomly by randomly choosing even or odd
    currentQuestionIndex = 0;
    displayNextQuestion();
}

function displayNextQuestion() {
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
    quizContainer.innerHTML = quizQuestions.question;

}
//How the timer works and is called
function timer() {
    timeText.textContent = timeLeft;
    var timed = setInterval(function () {
        timeLeft--;
        timeText.textContent = timeLeft + " seconds left";
        if (timeLeft === 0) {
            timeLeft = 0;
            clearInterval(timed);
            alert("You Lost!");
        }
    }, 1000);

}

// Event listeners
//submitButton.addEventListener('click', showResults);



