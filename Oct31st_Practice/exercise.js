"use strict"

const $ = (selector) => document.querySelector(selector);

let timer = null; // Set timer to null in the beginning.

const timerButton = () => {
    let counter = 1; // Setting counter to 1 to start
    if (timer == null) { 
        timer = setInterval( () => {
            counter += 1;
            $("#number").firstChild.nodeValue = counter;
        },1000);
        /*
            If the timer is null, Add one to the counter
            select the id number and grab its text content
            making this equal to the counter after adding one.

            Next set the text content of the button to stop
            after it is clicked originally.
        */
        $("#toggle_show").textContent = "Stop";
    } else {
        /*
        If timer is not null, clear the timer,
        set back to null.
        
        Set the button text back to start.
        */
        clearInterval(timer);
        timer = null;
        $("#toggle_show").textContent = "Start";
    }
}

document.addEventListener("DOMContentLoaded", () => {
    console.log("loaded");
    $("#toggle_show").addEventListener("click", timerButton)
});