let intervalId;

function setAlarm() {
  const inputArea = document.getElementById("alarmSet");
  let remaining = Number(inputArea.value);

  if (isNaN(remaining) || remaining <= 0) return;

  const countDown = document.getElementById("timeRemaining");

  clearInterval(intervalId); // clear any previous timers
  updateDisplay(remaining, countDown);

  intervalId = setInterval(() => {
    remaining--;

    updateDisplay(remaining, countDown);

    if (remaining <= 0) {
      clearInterval(intervalId);
      playAlarm();
    }
  }, 1000);
}

function updateDisplay(seconds, element) {
  const mins = Math.floor(seconds / 60)
    .toString()
    .padStart(2, "0");
  const secs = (seconds % 60).toString().padStart(2, "0");
  element.innerText = `Time Remaining: ${mins}:${secs}`;
}

// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
  });

  document.getElementById("stop").addEventListener("click", () => {
    pauseAlarm();
  });
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
}

window.onload = setup;
