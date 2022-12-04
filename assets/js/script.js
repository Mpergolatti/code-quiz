var introPage = document.querySelector('#introPage')
var questions = document.querySelector('#questions')
var startButton = document.querySelector('#startButton')
var mainQuestion = document.querySelector('#mainQuestion')
var mainButton = document.querySelectorAll('.btnSelect')
var btnAnswer1 = document.querySelector('#btnAnswer1')
var btnAnswer2 = document.querySelector('#btnAnswer2')
var btnAnswer3 = document.querySelector('#btnAnswer3')
var btnAnswer4 = document.querySelector('#btnAnswer4')
var checkAnswer = document.querySelector('#checkAnswer')
var submit = document.querySelector('#submit')
var finalPoints = document.querySelector('#finalPoints')

// Questions

var questionPanel = [
  {
    question: 'Question 1',
    choices: [
      'A. One',
      'B. Two',
      'C. Three',
      'D. Four'
    ],
    answer: 'A'
  },
  {
    question: 'Question 2',
    choices: [
      'A. One',
      'B. Two',
      'C. Three',
      'D. Four'
    ],
    answer: 'A'
  },
  {
    question: 'Question 3',
    choices: [
      'A. One',
      'B. Two',
      'C. Three',
      'D. Four'
    ],
    answer: 'A'
  },
  {
    question: 'Question 4',
    choices: [
      'A. One',
      'B. Two',
      'C. Three',
      'D. Four'
    ],
    answer: 'A'
  },
  {
    question: 'Question 5',
    choices: [
      'A. One',
      'B. Two',
      'C. Three',
      'D. Four'
    ],
    answer: 'A'
  },
]


var timeLeft = document.getElementById('timer');

// Starting Variables
var remainSec = 60;
var questionNum = 0;
var totalPoints = 0;
var questionCount = 1;

// Time Function
function countdown() {
  var timerInterval = setInterval(function() {
    remainSec--;
    timeLeft.textContent = 'Time left: ' + remainSec;
      if (remainSec <= 0 ) {
        clearInterval(timerInterval);
        timeLeft.textContent = "Time's Up!";
        gameOver();
      } else if
        (questionCount >= questionPanel.length +1) {
          clearInterval(timerInterval);
          gameOver();
        }
  }, 1000);
}

// Quiz Start Function
function quizStart() {
  
  // introPage.style.display = 'none';
  // questions.style.display = 'block';
  questionNum = 0;
  countdown();
  showQuestion(questionNum);
}

// Answer and Question Function
function showQuestion(e) {
  mainQuestion.textContent = questionPanel[e].question
  btnAnswer1.textContent = questionPanel[e].choices[0]
  btnAnswer2.textContent = questionPanel[e].choices[1]
  btnAnswer3.textContent = questionPanel[e].choices[2]
  btnAnswer4.textContent = questionPanel[e].choices[3]
  questionNum = e
}

// Correct and Incorrect Answer Function
function answerCheck(event) {
  event.preventDefault();
  checkAnswer.style.display = 'block'
  setTimeout(function() {
    checkAnswer.style.display = 'none'
  }, 1000);

  // Check The Answer
  if(questionPanel[questionNum].answer == event.target.value) {
    checkAnswer.textContent = 'Correct!'
    totalPoints = totalPoints + 1;

  } else {
    remainSec = remainSec - 10
    checkAnswer.textContent = 'That is Incorrect, The Correct Answer is ' + questionPanel[questionNum].answer + ' .'
  }

  // Another Question Appears
  if(questionNum < questionPanel.length -1) {
    showQuestion(questionNum + 1)
  } else {
    gameOver();
  }
  questionCount++
}

// gameOver function
function gameOver() {
  questions.style.display = 'none'
  submit.style.display = 'block'
  console.log(submit)
  finalPoints.textContent = 'Your Final Score is: ' + totalPoints
  timeLeft.style.display = 'none'
}

// getPoints Local Storage
function getPoints() {
  var currentList = localStorage.getItem('PointList')
  if(currentList !== null) {
    newList = JSON.parse(currentList)
    return newList
  } else {
    newList = []
  }
  return newList
}

// Add Score to Scoreboard
function showPoints() {

}


// Event Listeners
startButton.addEventListener('click', quizStart)

mainButton.forEach(function(click) {
  click.addEventListener('click', answerCheck)
})