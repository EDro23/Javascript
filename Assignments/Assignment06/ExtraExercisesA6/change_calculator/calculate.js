"use strict";

const $ = (selector) => document.querySelector(selector);

document.addEventListener("DOMContentLoaded", () => {
    $("#calculate").addEventListener("click", () => {

        const centsInput = $("#cents").value.trim();
        const cents = parseInt(centsInput);

        if (isNaN(cents) || cents < 0 || cents > 99) {
            alert("Cents must be a number between 0 and 99.");
            $("#cents").focus();
            return;
        }

        // Calculate the minimum number of coins
        const quarters = Math.floor(cents / 25);
        let remainingCents = cents % 25;

        const dimes = Math.floor(remainingCents / 10);
        remainingCents = remainingCents % 10;

        const nickels = Math.floor(remainingCents / 5);
        remainingCents = remainingCents % 5;

        const pennies = remainingCents;

        // Display the results in the corresponding text boxes
        $("#quarters").value = quarters;
        $("#dimes").value = dimes;
        $("#nickels").value = nickels;
        $("#pennies").value = pennies;

        // Set focus back to the cents text box for the next calculation
        $("#cents").focus();
    });

    // Set focus on the cents text box on initial load
    $("#cents").focus();
});
