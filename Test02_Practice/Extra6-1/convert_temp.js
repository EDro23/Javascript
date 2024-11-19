"use strict";
const $ = selector => document.querySelector(selector);

/*********************
*  helper functions  *
**********************/
const calculateCelsius = temp => (temp - 32) * 5 / 9;
const calculateFahrenheit = temp => temp * 9 / 5 + 32;

const toggleDisplay = (label1Text, label2Text) => {
    // Update the text content of the labels
    const label1 = $("#degree_label_1");
    const label2 = $("#degree_label_2");

    if (label1) {
        label1.textContent = label1Text;
    }
    if (label2) {
        label2.textContent = label2Text;
    }

    // Clear the value of the computed temperature display
    const computedTemp = $("#degrees_computed");
    if (computedTemp) {
        computedTemp.value = "";
    }
};

/****************************
*  event handler functions  *
*****************************/
const convertTemp = () => {
    const cButton = $("#to_celsius");
    const fButton = $("#to_fahrenheit");
    const degreesEntered = parseFloat($("#degrees_entered").value); // Get input and convert to number
    const computedTemp = $("#degrees_computed");
    const tBox = $("#message");

    // Check if input is a valid number
    if (isNaN(degreesEntered)) {
        if (tBox) {
            // Use textContent if #message is not an input element
            tBox.textContent = "Please enter a valid number";
        }
        return; // Stop further execution
    } else {
        if (tBox) {
            tBox.textContent = ""; // Clear any previous error message
        }
    }

    // Perform conversion based on selected option
    if (cButton.checked) {
        const celsius = calculateCelsius(degreesEntered);
        computedTemp.value = celsius.toFixed(2); // Display result with 2 decimal places
    } else if (fButton.checked) {
        const fahrenheit = calculateFahrenheit(degreesEntered);
        computedTemp.value = fahrenheit.toFixed(2); // Display result with 2 decimal places
    } else {
        alert("Please select a conversion option.");
    }
};

const toCelsius = () => toggleDisplay("Enter F degrees:", "Degrees Celsius:");
const toFahrenheit = () => toggleDisplay("Enter C degrees:", "Degrees Fahrenheit:");

document.addEventListener("DOMContentLoaded", () => {
    // add event handlers
    $("#convert").addEventListener("click", convertTemp);
    $("#to_celsius").addEventListener("click", toCelsius);
    $("#to_fahrenheit").addEventListener("click", toFahrenheit);
    
    // move focus
    $("#degrees_entered").focus();
});
