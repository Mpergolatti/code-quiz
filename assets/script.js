// var timerEl = document.getElementById('countdown');

// // Time that counts down from 60
// function timer() {
//   var timeLeft = 60;

//   // Using the setInterval() method to call function @ 1000ms
//   var timerCountdown = setInterval(function () {

//     if(timeLeft > 1) {
//       timerEl.textContent = timeLeft + ' Seconds Remaining';
//       timeLeft --;

//     } else if (timeLeft === 1) {
//       timerEl.textContent = timeLeft + ' Second Remaining';
//       timeLeft --;

//     } else {
//       timerEl.textContent = '';
//       clearInterval(timerCountdown);
//       displayMessage();
//     }

//   }, 1000);
  
// }
var timerEl = document.getElementById('some_div');

var timeLeft = 5;
    
    var timerId = setInterval(countdown, 1000);
    
    function countdown() {
      if (timeLeft == -1) {
        clearTimeout(timerId);
        doSomething();
        
      } else {
        timerEl.innerHTML = timeLeft + ' seconds remaining';
        timeLeft--;

        window.alert('Times Up!')
      }
    }