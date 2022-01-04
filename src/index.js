const timer = document.getElementById('stopwatch');

var hr =0;
var min =0;
var sec =0;
var stoptimer = false;


function startTime() {
  if (stopTime === true) {
    stopTime (); false;
    timerCycle();

  }
}

function stopTime() {
  if (startTime === true) ({
    
    timerCycle();
  })
}

function timerCycle() {
  if (stoptimer == false) {
  sec = parseInt(sec);
  min = parseInt(min);
  hr = parseInt(hr);

  sec = sec + 1

  if (sec === 60 ) {
    min = min + 1;
    sec = 0
  }

  if (min === 60) {
    hr = hr + 1;
    min = 0;
    sec = 0;
  }
  }
}