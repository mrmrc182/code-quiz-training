var answerTime = document.getElementById("time");
var startButton = document.getElementById("startButton");
var correctAnswer = document.getElementById("correct");
var correctScore = document.querySelector("correctScore");
var correctTotal = 0;
var incorrectAnswer = document.querySelector("incorrect");
var score = document.querySelector("score");
var resetQuiz = document.getElementById("reset");


startButton.addEventListener("click", function(){
    clock();
    displayQuestion();
  });

function clock() {
    var timeLeft = 5;
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

var questionContainer2 = document.getElementById("questionContainer2");

correctAnswer.addEventListener("click", function(){
    console.log(correctTotal + 1);
    questionContainer.style.display="none";
    questionContainer2.style.display="block";
});
