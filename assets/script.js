var timerEl = document.getElementById('countdown');

// Time that counts down from 60
function timer() {
  var timeLeft = 60;

  // Using the setInterval() method to call function @ 1000ms
  var timerCountdown = setInterval(function () {

    if(timeLeft > 1) {
      timerEl.textContent = timeLeft + ' Seconds Remaining';
      timeLeft --;

    } else if (timeLeft === 1) {
      timerEl.textContent = timeLeft + ' Second Remaining';
      // window.alert('Times Up');
      timeLeft --;

    } else {
      timerEl.textContent = 'Times Up!';
      clearInterval(timerCountdown);
      // window.alert('Times Up!');
    }

  }, 1000);
  
}

timer()
