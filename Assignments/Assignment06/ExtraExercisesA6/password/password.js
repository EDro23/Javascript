"use strict";
const $ = (selector) => document.querySelector(selector);

const getRandomNumber = (max) => {
	let random = null;
	if (!isNaN(max)) {
		random = Math.random();
		random = Math.floor(random * max);
	}
	return random;
};

document.addEventListener("DOMContentLoaded", () => {
    $("#generate").addEventListener("click", () => {
        $("#password").value = ""; // Clear previous password

        const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz_-+!@";

        // Get the number of characters from user input
        const numInput = $("#num").value.trim();
        const num = parseInt(numInput);

        // Validate the input
        if (isNaN(num) || num <= 0) {
            alert("Please enter a valid number.");
            $("#num").focus();
            return;
        }

        // Generate the password
        let password = "";
        for (let i = 0; i < num; i++) {
            const randomIndex = getRandomNumber(chars.length);
            password += chars[randomIndex];
        }

        // Display the generated password
        $("#password").value = password;

        // Set focus back to the number input field
        $("#num").focus();
    }); // end click()
    
    $("#clear").addEventListener("click", () => {
        $("#num").value = "";
        $("#password").value = "";
        $("#num").focus();
    }); // end click()
    
    // Set focus on the number input on initial load
    $("#num").focus();
}); // end ready()
