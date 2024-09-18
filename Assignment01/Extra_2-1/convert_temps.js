"use strict";

// get 3 scores from user and add them together
const fahrenheit = parseFloat(prompt("Enter tempurature in fahrenheit!"));

const input = fahrenheit

// Calculate fahrenheit to celsius

const conversion = parseFloat((fahrenheit - 32) * 5 / 9)

const number = conversion

// Display in browser page

const html = `<p>${fahrenheit} Degrees fahrenheit in celsius is ${number.toFixed(1)} degrees! :)</p>`;
document.write(html);