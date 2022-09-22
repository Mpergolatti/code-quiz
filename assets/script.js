var timerEl = document.getElementById('timer');

// Time that counts down from 60
function timer () {
  var timeLeft = 60;

  // Using the setInterval() method to call function @ 1000ms
  var timerCountdown = setInterval(function () {

    if(timeLeft > 1) {
      timerEl.textContent = timeLeft + ' Seconds Remaining';
      timeLeft --;

    } else if (timeLeft === 1) {
      timerEl.textContent = timeLeft + ' Second Remaining';
      timeLeft --;

    } else {
      timerEl.textContent = '';
      clearInterval(timerCountdown);
      displayMessage();
    }

  }, 1000);
  console.log(timer)
}

