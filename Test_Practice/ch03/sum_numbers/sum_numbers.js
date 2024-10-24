"use strict";

let sumArray = []
let entry;
let continueBox;

do {
    entry = parseInt(prompt("Enter any top number to sum\nfrom 1 through 100"))
    if (entry > 100 || entry <= 0 || isNaN(entry)) {
        alert("Please enter a number between 1 and 100")
    } else {
        sumArray.push(entry);
    }

    continueBox = prompt("Continue? (y/n)")

    if (continueBox.toLowerCase() !== "y") {
        break;
    }

 } while (true)

for (let i = 0; i < sumArray.length; i++) {

    let curentNumber = sumArray[i];
    let sumNumbers = (curentNumber * (curentNumber + 1)) / 2;

    document.write(`<p>The sum of the numbers from 1 through ${curentNumber} is ${sumNumbers}</p>`);
}