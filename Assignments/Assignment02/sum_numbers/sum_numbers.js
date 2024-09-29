"use strict";

let numberArray = [];
let number;
let continueBox;

do {
    number = parseInt(prompt("Enter any top number to sum\nfrom 1 through 100"));
    if (number < 1 || number > 100 || isNaN(number)) {
        alert("Please enter a number between 1 and 100");
    } else {
        numberArray.push(number);
    }

    continueBox = prompt("Do you want to enter another sum? (y/n)")

    if (continueBox.toLowerCase() !== "y") {
        break;
    }
} while (true);

for (let i = 0; i < numberArray.length; i++) {

    let currentNumber = numberArray[i];
    let totalSum = (currentNumber * (currentNumber + 1)) / 2;
    
    document.write(`<p>The sum of the numbers 1 through ${currentNumber} is ${totalSum}</p>`);
}