"use strict";
const $ = selector => document.querySelector(selector);

const padSingleDigit = num => num.toString().padStart(2, "0");

const displayCurrentTime = () => {
    let todaysDate = new Date();

    let hours = todaysDate.getHours();
    const minutes = todaysDate.getMinutes();
    const seconds = todaysDate.getSeconds();
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

    $("#hours").textContent = hours;
    $("#minutes").textContent = minutes;
    $("#seconds").textContent = seconds;
    $("#ampm").textContent = ampm;
};

document.addEventListener("DOMContentLoaded", () => {
    setInterval(displayCurrentTime, 1000)
});