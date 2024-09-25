"use strict";

let collection = [];
let oddValues = [];
let userInput;
let sum = 0;

do {
    userInput = parseInt(prompt("Enter a number: ",-999))

    if (isNaN(userInput)) {
        alert("This is not a number! Try again.")
    } else {
        if (userInput > 0) {
            collection.push(userInput)
        }
    }

} while (userInput != -999);

console.log(collection);

for(let i in collection) {
    sum += collection[i];
}
document.write(`<p>Sum: ${sum}</p>`)

for (let value of collection) {
    if(value % 2 != 0) {
        oddValues[oddValues.length] = value;

    }
}

document.write(`<p>Odd Numbers: ${oddValues}</p>`)
