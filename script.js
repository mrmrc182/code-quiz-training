var answerTime = document.getElementById("time");
var startButton = document.getElementById("startButton");
var questionContainer = document.querySelector("question-container");
var mainEl = document.getElementById("main");

var resetQuiz = document.getElementById("reset");
var startMessage = document.getElementById("startMessage");

var timeLeft = 20;

startButton.addEventListener("click", function () {
    startButton.textContent = "";
    startMessage.textContent = "";
    clock();
    question1();
    if (timeLeft > 0){
        return;
    };
});

var timeInterval;
function clock() {
    timeInterval = setInterval(function () {
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
    score.textContent= "Your score is " + timeLeft;
    clearInterval(timeInterval);
    startButton.textContent = "";
    answerTime.textContent= "";
    startMessage.textContent= "";
    document.getElementById("initials").style.display= "block";
}

var score = document.getElementById("score");
var submitButton = document.getElementById("submitButton");
var initials = document.getElementById("scoreInitials");
submitButton.addEventListener("click", function (event){
    event.preventDefault();
    var highScore = {
        score: score.value,
        initials: initials.value,
    }
    localStorage.setItem("score", JSON.stringify(highScore.score));
    localStorage.setItem("initials", JSON.stringify(highScore.initials));
})

//Tyler from BCS helped me with the formatting putting the questions into an array
var Question = [
    {
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
    },
    {
        question: "What is the term used to grab an ID in your HTML?",
        answers:
            [
                {
                    "text": ".innerText",
                    "isCorrect": false
                },
                {
                    "text": "this.ID",
                    "isCorrect": false
                },
                {
                    "text": "getElementByID",
                    "isCorrect": true
                }
            ]
    },
    {
        question: "What is the first word you write when referencing an element or class in the HTML?",
        answers:
            [
                {
                    "text": "document",
                    "isCorrect": true
                },
                {
                    "text": "query",
                    "isCorrect": false
                },
                {
                    "text": "element",
                    "isCorrect": false
                }
            ]
    },
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
        loseTime();
    })
    ans2.addEventListener("click", function (){
        this.innerHTML="";
        question3();
        gainTime();
    })
    ans3.addEventListener("click", function (){
        this.innerHTML="";
        question3();
        loseTime();
    })
}

function question3 (){
    question.innerText = Question[2].question;
    ans1.innerText = Question[2].answers[0].text;
    ans2.innerText = Question[2].answers[1].text;
    ans3.innerText = Question[2].answers[2].text;
    ans1.addEventListener("click", function (){
        this.innerHTML="";
        question4();
        loseTime();
    })
    ans2.addEventListener("click", function (){
        this.innerHTML="";
        question4();
        gainTime();
    })
    ans3.addEventListener("click", function (){
        this.innerHTML="";
        question4();
        loseTime();
    })
}

function question4 (){
    question.innerText = Question[3].question;
    ans1.innerText = Question[3].answers[0].text;
    ans2.innerText = Question[3].answers[1].text;
    ans3.innerText = Question[3].answers[2].text;
    ans1.addEventListener("click", function (){
        this.innerHTML="";
        question5();
        loseTime();
    })
    ans2.addEventListener("click", function (){
        this.innerHTML="";
        question5();
        loseTime();
    })
    ans3.addEventListener("click", function (){
        this.innerHTML="";
        question5();
        gainTime();
    })
}
function question5 (){
    question.innerText = Question[4].question;
    ans1.innerText = Question[4].answers[0].text;
    ans2.innerText = Question[4].answers[1].text;
    ans3.innerText = Question[4].answers[2].text;
    ans1.addEventListener("click", function (){
        this.innerHTML="";
        endGame();
        gainTime();
    })
    ans2.addEventListener("click", function (){
        this.innerHTML="";
        endGame();
        loseTime();
    })
    ans3.addEventListener("click", function (){
        this.innerHTML="";
        endGame();
        loseTime();
    })
}
function loseTime (){
    timeLeft = timeLeft - 5;
}

function gainTime(){
    timeLeft = timeLeft + 5;
}

