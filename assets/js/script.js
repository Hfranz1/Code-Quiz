var startQuizButton = document.getElementById("startQuizButton");
var submitButton = document.getElementById("submitButton");
var goBackButton = document.getElementById("goBackButton");
var clearHighScores =document.getElementById("ClearHighscore");

var mainPage = document.getElementById("mainPage");
var questionContainer = document.getElementById("questionContainer");
var initials = document.getElementById("initials")



var timerImput = document.getElementById("countdown");
var timeLeft = 60;
var userScore = 0;


var finalScorePage = document.getElementById("finalScore");
var highScorePage = document.getElementById("highscores");
var scoreInout = document.getElementById("score");
var highscoreDiv = document.getElementById("highscoreDiv");


var question1 = document.getElementById("question1");
var question2 = document.getElementById("question2");
var question3 = document.getElementById("question3");
var question4 = document.getElementById("question4");


var btn1A = document.getElementById("option1A");
var btn1B = document.getElementById("option1B");
var btn1C = document.getElementById("option1C");
var btn1D = document.getElementById("option1D");

var btn2A = document.getElementById("option2A");
var btn2B = document.getElementById("option2B");
var btn2C = document.getElementById("option2C");
var btn2C = document.getElementById("option2D");

var btn3A = document.getElementById("option3A");
var btn3B = document.getElementById("option3B");
var btn3C = document.getElementById("option3C");
var btn3D = document.getElementById("option3D");

var btn4A = document.getElementById("option4A");
var btn4B = document.getElementById("option4B");
var btn4C = document.getElementById("option4C");
var btn4D = document.getElementById("option4D");


var anserFeedback = document.getElementById("answerFeedback");


startQuizButton.addEventListener("click", function(){
    mainPage.style.display = "none";
    questionContainer.style.display = "block";
    question1.style.display = "block";
    displayTime();
});


function displayTime() {
    timerImput.textContent = timeLeft;
    var timeCount = setInterval = (function() {
        timeLeft--;
        timerImput.textContent = timeLeft;
        if(timeLeft<=0){
            quizOver();
            clearInterval(timeCount);
        };
    },1000);
};


btn1A.addEventListener("click", function(){
    userScore = timeLeft;
    anserFeedback.textContent ="Correct";
    question1.style.display = "none";
    question2.style.display = "block";
});

btn1B.addEventListener("click", function(){
    timeLeft-=10;
    userScore = timeLeft;
    anserFeedback.textContent ="Wrong";
    question1.style.display = "none";
    question2.style.display = "block";

});

btn1C.addEventListener("click", function(){
    timeLeft-=10;
    userScore = timeLeft;
    anserFeedback.textContent ="Wrong";
    question1.style.display = "none";
    question2.style.display = "block";
});

btn1D.addEventListener("click", function(){
    timeLeft-=10;
    userScore = timeLeft;
    anserFeedback.textContent ="Wrong";
    question1.style.display = "none";
    question2.style.display = "block";
});


btn2A.addEventListener("click", function(){
    timeLeft-=10;
    userScore = timeLeft;
    anserFeedback.textContent ="Wrong";
    question2.style.display = "none";
    question3.style.display = "block";
});

btn2B.addEventListener("click", function(){
    timeLeft-=10;
    userScore = timeLeft;
    anserFeedback.textContent ="Wrong";
    question2.style.display = "none";
    question3.style.display = "block";
});

btn2C.addEventListener("click", function(){
    userScore = timeLeft;
    anserFeedback.textContent ="Correct";
    question2.style.display = "none";
    question3.style.display = "block";
});

btn2D.addEventListener("click", function(){
    timeLeft-=10;
    userScore = timeLeft;
    anserFeedback.textContent ="Wrong";
    question2.style.display = "none";
    question3.style.display = "block";
});


btn3A.addEventListener("click", function(){
    timeLeft-=10;
    userScore = timeLeft;
    anserFeedback.textContent ="Wrong";
    question3.style.display = "none";
    question4.style.display = "block";
});

btn3B.addEventListener("click", function(){
    userScore = timeLeft;
    anserFeedback.textContent ="Correct";
    question3.style.display = "none";
    question4.style.display = "block";
});

btn3C.addEventListener("click", function(){
    timeLeft-=10;
    userScore = timeLeft;
    anserFeedback.textContent ="Wrong";
    question3.style.display = "none";
    question4.style.display = "block";
});

btn3D.addEventListener("click", function(){
    timeLeft-=10;
    userScore = timeLeft;
    anserFeedback.textContent ="Wrong";
    question3.style.display = "none";
    question4.style.display = "block";
});


btn4A.addEventListener("click", function(){
    timeLeft-=10;
    userScore = timeLeft;
    anserFeedback.textContent ="Wrong";
    question4.style.display = "none";
    quizOver();
});

btn4B.addEventListener("click", function(){
    timeLeft-=10;
    userScore = timeLeft;
    anserFeedback.textContent ="Wrong";
    question4.style.display = "none";
    quizOver();
});

btn4C.addEventListener("click", function(){
    timeLeft-=10;
    userScore = timeLeft;
    anserFeedback.textContent ="Wrong";
    question4.style.display = "none";
    quizOver();
});

btn4D.addEventListener("click", function(){
    userScore = timeLeft;
    anserFeedback.textContent ="Correct";
    question4.style.display = "none";
    quizOver();
});


