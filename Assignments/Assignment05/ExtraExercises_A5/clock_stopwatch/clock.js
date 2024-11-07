"use strict";
const $ = selector => document.querySelector(selector);

const padSingleDigit = num => num.toString().padStart(2, "0");

const displayCurrentTime = () => {
    const now = new Date();
    let hours = now.getHours();
    let ampm = "AM"; // set default value
    
    // correct hours and AM/PM value for display
    if (hours > 12) { // convert from military time
        hours = hours - 12;
        ampm = "PM";
    } else { // adjust 12 noon and 12 midnight
         switch (hours) {
            case 12: // noon
                ampm = "PM";
                break;
            case 0:  // midnight
                hours = 12;
                ampm = "AM";
        }
    }
    
    $("#hours").textContent = hours;
    $("#minutes").textContent = padSingleDigit(now.getMinutes());
    $("#seconds").textContent = padSingleDigit(now.getSeconds());
    $("#ampm").textContent = ampm;
};


//global stop watch timer variable and elapsed time object
let stopwatchTimer = null;
let elapsedMinutes = 0;
let elapsedSeconds = 0;
let elapsedMilliseconds = 0;

const tickStopwatch = () => {
    elapsedMilliseconds += 10;
    if (elapsedMilliseconds === 1000) {
        elapsedSeconds += 1;
        elapsedMilliseconds = 0;
    }
    if (elapsedSeconds === 60) {
        elapsedMinutes += 1;
        elapsedSeconds = 0;
    }

    $("#s_minutes").textContent = elapsedMinutes
    $("#s_seconds").textContent = elapsedSeconds
    $("#s_ms").textContent = elapsedMilliseconds
};

const startStopwatch = evt => {
    evt.preventDefault();

    // If the stopwatch is already running, do nothing
    if (stopwatchTimer !== null) return;

    // Do the first tick and then set interval to tick every 10 milliseconds
    tickStopwatch();
    stopwatchTimer = setInterval(tickStopwatch, 10);
    
};

const stopStopwatch = evt => {
    evt.preventDefault();

    // Stop the timer if it is running
    if (stopwatchTimer !== null) {
        clearInterval(stopwatchTimer);
        stopwatchTimer = null;
    }
};

const resetStopwatch = evt => {
    evt.preventDefault();

    // Stop the timer if it is running
    if (stopwatchTimer !== null) {
        clearInterval(stopwatchTimer);
        stopwatchTimer = null;
    }

    // Reset elapsed time variables
    elapsedMinutes = 0;
    elapsedSeconds = 0;
    elapsedMilliseconds = 0;

    $("#s_minutes").textContent = "0";
    $("#s_seconds").textContent = "0";
    $("#s_ms").textContent = "0";
};

document.addEventListener("DOMContentLoaded", () => {
    // set initial clock display and start updating it every second
    displayCurrentTime();
    setInterval(displayCurrentTime, 1000);
    
    // set up stopwatch event handlers
    $("#start").addEventListener("click", startStopwatch);
    $("#stop").addEventListener("click", stopStopwatch);
    $("#reset").addEventListener("click", resetStopwatch);
});