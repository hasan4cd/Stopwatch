var milliseconds = 0;
var seconds = 0;
var minutes = 0;
var hours = 0;
var timer = null;

function start() {
    if (timer !== null) {
        return;
    }
    timer = setInterval(run, 8);
}

function run() {
    milliseconds++

    if (milliseconds == 99) {
        milliseconds = 0;
        seconds++;
    }

    if (seconds == 60) {
        seconds = 0;
        minutes++;
    }

    if (minutes == 60) {
        minutes = 0;
        hours++;
    }
    updatedDisplay();
}

function stop() {
    clearInterval(timer)
    timer = null;
}

function reset() {
    stop()
    milliseconds = 0
    seconds = 0
    minutes = 0
    hours = 0
    updatedDisplay();
}

function updatedDisplay() {
    var h = hours < 10 ? "0" + hours : hours
    var m = minutes < 10 ? "0" + minutes : minutes
    var s = seconds < 10 ? "0" + seconds : seconds
    var r = milliseconds < 10 ? "0" + milliseconds : milliseconds

    document.getElementById("show").innerHTML = h + " : " + m + " : " + s + " : " + r;
}