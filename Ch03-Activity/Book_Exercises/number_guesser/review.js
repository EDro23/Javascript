"use strict";

function runGame() {
    let secretNum = Math.floor(Math.random() * 11);
    let counter = 0;
    let input;

    if (document.getElementById("restartButton")) {
        document.getElementById("restartButton").remove();
    }

    do {
        input = parseInt(prompt("Enter a number between 1-10"));

        if (isNaN(input)) {
            alert("Not a number, Please try again.");
        }
        else if (input === secretNum) {
            alert("Correct number!");
            alert(`It took you ${counter} guesses!`);

            document.write(`Correct number!\n`);
            document.write(`Guesses: ${counter}`);

            if (!document.getElementById("restartButton")) {
                document.body.insertAdjacentHTML('beforeend', `<button id="restartButton">Try again</button>`);
            }

            document.getElementById("restartButton").onclick = function () {
                runGame();
            };

            break;
        }
        else {
            alert("Wrong number, Try again!");
            counter += 1;
        }
    } while (input !== secretNum);
}

runGame();
