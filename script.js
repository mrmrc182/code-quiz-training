var answerTime = document.getElementById("time");
var startButton = document.getElementById("startButton");
var questionContainer = document.querySelector("question-container");

var score = document.querySelector("score");
var resetQuiz = document.getElementById("reset");


startButton.addEventListener("click", function () {
    clock();
    iterate(0);
});

function clock() {
    var timeLeft = 20;
    var timeInterval = setInterval(function () {
        if (timeLeft > 1) {
            answerTime.textContent = timeLeft + " seconds left.";
            timeLeft--;
        }
        else if (timeLeft === 1) {
            answerTime.textContent = timeLeft + " second left."
            timeLeft--;
        }
        else {
            answerTime.textContent = "You lost";
        }
    }
        , 1000);

}


var Questions= [{
id: 0,
question: "What is the first word we write when naming a variable?",
answers: [{ text: "Var", isCorrect: true },
            { text: "Obj", isCorrect: false },
            { text: "Rel", isCorrect: false },
        ],
id: 1,
question: "What is the term for a sequence of characters?",
answers: [{ text: "Sequence", isCorrect: false },
            { text: "String", isCorrect: true },
            { text: "Cover", isCorrect: false },
        ]
}]

function iterate(id) {
    var question = document.getElementById("question");
    question.innerText = Questions[id].question;
    var ans1 = document.getElementById("ans1");
    var ans2 = document.getElementById("ans2");
    var ans3 = document.getElementById("ans3");
    ans1.innerText = Questions[id].answers[0].text;
    ans2.innerText = Questions[id].answers[1].text;
    ans3.innerText = Questions[id].answers[2].text;
    ans1.value = Questions[id].answers[0].isCorrect;
    ans2.value = Questions[id].answers[1].isCorrect;
    ans3.value = Questions[id].answers[2].isCorrect;
}

// var questionContainer = document.querySelector("questionContainer");
// for (var i = 0; i < questionContainer.length; i++){
//     questionContainer.setAttribute("style", "display: none");
// }
// Manan from BCS helped with the following function below
