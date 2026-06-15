// Countdown Timer logic
function startTimer(duration, display) {
  let timer = duration, minutes, seconds;
  setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    if (display) {
      display.textContent = minutes + ":" + seconds;
    }

    if (--timer < 0) {
      timer = 0; // stop at 00:00
    }
  }, 1000);
}

window.onload = function () {
  const timeInSeconds = 91; // 01:31 countdown
  const display = document.querySelector('#timer');
  if (display) {
    startTimer(timeInSeconds, display);
  }
};
