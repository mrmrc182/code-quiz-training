var answerTime = document.getElementById("time");
var startButton = document.getElementById("startButton");
var questionContainer = document.querySelector("question-container");

var score = document.querySelector("score");
var resetQuiz = document.getElementById("reset");


startButton.addEventListener("click", function () {
    clock();
    displayQuestion();
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
// BCSsuggested i store the ID as a global variable
var id = 0;

//Tyler from BCS helped me with the formatting putting the questions into an array
var Question = [
    {
     id: 0,
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
     id: 1,
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
     id: 2,
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
var main = document.getElementById("main");
function displayQuestion(){
    // I want to run the iterate function
    iterate(0);
}

// answers.addEventListener("click", iterate(++));
// // When the user clicks an answer, I want to either add/take off time if they got it correct or not
// //Then it goes to the next question
// })
// Manan from BCS helped with the following function below
