"use strict";

const secretNum = []

const counter = 0

do {
    const input = parseInt(
        prompt("Enter a number between 1-10"));
    
        let secretNum = Math.floor(Math.random * 11);

    if (input == secretNum) {
        document.write("Correct number!")
        document.write(`<p>Guesses: ${counter}}</p>`)
    }
    if (input != secretNum){
        alert("Wrong number, Try again!");
        counter += 1
    }
}
while(secretNum != input);