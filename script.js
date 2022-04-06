var answerTime = document.getElementById("time");
var startButton = document.getElementById("startButton");
var questionContainer = document.querySelector("question-container");
var mainEl = document.getElementById("main");
var score = document.querySelector("score");
var resetQuiz = document.getElementById("reset");
resetQuiz.addEventListener("click", function () {
    clock();
    question1();
});

var timeLeft = 20;

startButton.addEventListener("click", function () {
    clock();
    question1();
    if (timeLeft > 0){
        return;
    };
});


function clock() {
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
            clearInterval(timeInterval);
            answerTime.textContent = "You lost";
            endGame();
        }
    }
        , 1000);

}

function endGame() {
    mainEl.style.display= "none";
    score.textContent= "Your score is " + (timeLeft);
    clearInterval(timeInterval);
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

var quizNumber = "";
var question = document.getElementById("question");
var ans1 = document.getElementById("ans1");
var ans2 = document.getElementById("ans2");
var ans3 = document.getElementById("ans3");

function question1() {
    question.innerText = Question[0].question;
    ans1.innerText = Question[0].answers[0].text;
    ans2.innerText = Question[0].answers[1].text;
    ans3.innerText = Question[0].answers[2].text;
    ans1.addEventListener("click", function (){
        this.innerHTML="";
        question2();
        loseTime();
    })
    ans2.addEventListener("click", function (){
        this.innerHTML="";
        question2();
        gainTime();
    })
    ans3.addEventListener("click", function (){
        this.innerHTML="";
        question2();
        loseTime();
    })
}

function question2 (){
    question.innerText = Question[1].question;
    ans1.innerText = Question[1].answers[0].text;
    ans2.innerText = Question[1].answers[1].text;
    ans3.innerText = Question[1].answers[2].text;
    ans1.addEventListener("click", function (){
        this.innerHTML="";
        question3();
    })
    ans2.addEventListener("click", function (){
        this.innerHTML="";
        question3();
    })
    ans3.addEventListener("click", function (){
        this.innerHTML="";
        question3();
    })
}

function question3 (){
    question.innerText = Question[2].question;
    ans1.innerText = Question[2].answers[0].text;
    ans2.innerText = Question[2].answers[1].text;
    ans3.innerText = Question[2].answers[2].text;
    ans1.addEventListener("click", function (){
        this.innerHTML="";
        endGame();
    })
    ans2.addEventListener("click", function (){
        this.innerHTML="";
        endGame();
    })
    ans3.addEventListener("click", function (){
        this.innerHTML="";
        endGame();
    })
}
function loseTime (){
    timeLeft = timeLeft - 5;
}

function gainTime(){
    timeLeft = timeLeft + 5;
}




// function nextQuestion() {
//     for (i = 0; i < Question.length; quizNumber++);
// }


// main.addEventListener("click", function(event) {
//     var element = event.target;
//     if (element.matches("button")){
//         for (i = 0; i < Question.length; quizNumber = i++);
//     }
// })
// console.log(Question.length);
// add event listener to entire document
// if class of event target.classlist = answer is answer, then check for ifCorrect/ifIncorrect
