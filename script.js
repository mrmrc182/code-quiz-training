var answerTime = document.getElementById("time");
var startButton = document.getElementById("startButton");
var correctAnswer = document.querySelector("correct");
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
            return setInterval();
        }
    }
    , 1000);
}

// var questionContainer = document.querySelector("questionContainer");
// for (var i = 0; i < questionContainer.length; i++){
//     questionContainer.setAttribute("style", "display: none");
// }
var questionContainer = document.querySelector("#questionContainer");
function displayQuestion(){
    questionContainer.style.display="block";
}

// correctAnswer.addEventListener("click", function() {
//     correctScore = correctTotal + 1;
//     localStorage.setItem("correct", correctScore);
//     console.log(correctScore);
// });
