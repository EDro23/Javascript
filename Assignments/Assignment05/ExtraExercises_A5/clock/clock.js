"use strict";
const $ = selector => document.querySelector(selector);

const padSingleDigit = num => num.toString().padStart(2, "0");

const displayCurrentTime = () => {
    
    const todaysDate = new Date()
    let hours = todaysDate.getHours();
    const minutes = padSingleDigit(todaysDate.getMinutes());
    const seconds = padSingleDigit(todaysDate.getSeconds());
    let ampm = "AM";

    if (hours >= 12) {
        ampm = "PM";
        if (hours > 12) {
            hours -= 12;
        }
    } else {
        ampm = "AM";
        if (hours === 0) {
            hours = 12;
        }
    }

    hours = padSingleDigit(hours);

    $("#hours").textContent = hours
    $("#minutes").textContent = minutes;
    $("#seconds").textContent = seconds;
    $("#ampm").textContent = ampm
};

document.addEventListener("DOMContentLoaded", () => {
    displayCurrentTime();

    setInterval(displayCurrentTime, 1000);

	// set initial clock display and then set interval timer to display
    // new time every second. Don't store timer object because it 
    // won't be needed - clock will just run.
});