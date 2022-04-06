var answerTime = document.getElementById("time");
var startButton = document.getElementById("startButton");
var questionContainer = document.querySelector("question-container");

var score = document.querySelector("score");
var resetQuiz = document.getElementById("reset");


startButton.addEventListener("click", function () {
    clock();
    iterate();
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

//Tyler from BCS helped me with the formatting putting the questions into an array
var Question = [
    {
        //  id: 0,
        question: "What is the term used when declaring a variable?",
        answers:
            [
                {
                    "text": "Obj",
                    "isCorrect": false
                },
                {
                    "text": "Var",
                    "isCorrect": true
                },
                {
                    "text": "Rel",
                    "isCorrect": false
                }
            ]
    },
    {
        //  id: 1,
        question: "What is the term used to describe a sequence of characters?",
        answers:
            [
                {
                    "text": "Sequence",
                    "isCorrect": false
                },
                {
                    "text": "String",
                    "isCorrect": true
                },
                {
                    "text": "Characters",
                    "isCorrect": false
                }
            ]
    },
    {
        //  id: 2,
        question: "What does the acronym DOM mean?",
        answers:
            [
                {
                    "text": "Darkness On Monday",
                    "isCorrect": false
                },
                {
                    "text": "Document Object Model",
                    "isCorrect": true
                },
                {
                    "text": "Dominance Of Me",
                    "isCorrect": false
                }
            ]
    }
]

function iterate(quizNumber) {
    var quizNumber = 0;
    var question = document.getElementById("question");
    question.innerText = Question[0].question;
    var ans1 = document.getElementById("ans1");
    var ans2 = document.getElementById("ans2");
    var ans3 = document.getElementById("ans3");
    ans1.innerText = Question[quizNumber].answers[0].text;
    ans2.innerText = Question[quizNumber].answers[1].text;
    ans3.innerText = Question[quizNumber].answers[2].text;
    ans1.value = Question[quizNumber].answers[0].isCorrect;
    ans2.value = Question[quizNumber].answers[1].isCorrect;
    ans3.value = Question[quizNumber].answers[2].isCorrect;
}

// function nextQuestion() {
//     for (i = 0; i < Question.length; quizNumber++);
// }
var main = document.getElementById("main");

main.addEventListener("click", function(event) {
    var element = event.target;
    if (element.matches(".answer")){
        for (i = 0; i < Question.length; quizNumber++);
    }
})
// add event listener to entire document
// if class of event target.classlist = answer is answer, then check for ifCorrect/ifIncorrect
