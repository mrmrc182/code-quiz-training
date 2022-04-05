var answerTime = document.getElementById("time");
var startButton = document.getElementById("startButton");


var score = document.querySelector("score");
var resetQuiz = document.getElementById("reset");


startButton.addEventListener("click", function(){
    clock();
    displayQuestion();
  });

function clock() {
    var timeLeft = 20;
    var timeInterval = setInterval(function() {
        if (timeLeft > 1){
            answerTime.textContent = timeLeft + " seconds left.";
            timeLeft--;
        }
        else if(timeLeft === 1){
            answerTime.textContent = timeLeft + " second left."
            timeLeft--;   
        }
        else {
            answerTime.textContent = "You lost";
        }
    }
    , 1000);
}

// var questionContainer = document.querySelector("questionContainer");
// for (var i = 0; i < questionContainer.length; i++){
//     questionContainer.setAttribute("style", "display: none");
// }
// Manan from BCS helped with the following function below
var questionContainer = document.querySelector("#questionContainer");
function displayQuestion(){
    questionContainer.style.display="block";
}

var questionContainer2 = document.getElementById("#questionContainer2");

var correctAnswer = document.querySelector("correct-btn");
var correctScore = document.querySelector("correctScore");
var correctTotal = 0;
var incorrectAnswer = document.querySelector("incorrect-btn");
var incorrectScore = document.querySelector("incorrectScore");
var incorrectTotal = 0;

document.correctAnswer.addEventListener("click", function(){
    nextQuestion();
    ifAnswerCorrect();
});

document.incorrectAnswer.addEventListener("click", nextQuestion),

function nextQuestion(){
        questionContainer.style.display = "none";
        questionContainer2.style.display = "block";
    }

function ifAnswerCorrect(){
     timeLeft = timeLeft + 5;
 }

 function ifIncorrect(){
     //want it to take away time if i click the incorrect answer
     timeLeft = (timeLeft - 5);
}