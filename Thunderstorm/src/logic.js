let minutes = 0;
let seconds = 0;
let hour = 0;

function start() {
  document.getElementById("play").disabled = true;

  if (document.getElementById("stop").disabled) {
    document.getElementById("stop").disabled = false;
  }

  cronometro = setInterval(function () {
    min_zerochar = "";
    sec_zerochar = "";
    hour_zerochar = "";

    if (minutes <= 9) min_zerochar = "0";
    else min_zerochar = "";

    if (seconds <= 9) sec_zerochar = "0";
    else sec_zerochar = "";

    if (hour <= 9) hour_zerochar = "0";
    else hour_zerochar = "";

    document.getElementById("time").innerText = hour_zerochar + hour + ":" +
      min_zerochar + minutes + ":" + sec_zerochar + seconds;
    seconds++;

    if (seconds > 59) {
      seconds = 0;
      minutes++;
    }

    if (minutes > 59) {
        hour++;
        seconds = 0;
        minutes = 0;
    }
  }, 1000);
}

function stop() {
  document.getElementById("play").disabled = false;
  document.getElementById("stop").disabled = true;
  clearInterval(cronometro);
}

function resetTimer() {
  clearInterval(cronometro);
  document.getElementById("time").innerText = "00:00:00";
  seconds = 0;
  minutes = 0;
  hour = 0;
}
