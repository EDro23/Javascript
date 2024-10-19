"use strict";

document.addEventListener("DOMContentLoaded", () => {

    let grades = [];
    let grade;
    let gradeLetter;


    do {
        grade = parseInt(prompt("Enter a number between 0 and 100, or 999 to exit",999));

        if (grade === 999) {
            break;
        }
        if (grade <= 0 || grade > 100) {
            alert('Number must be between 0 and 100')
            continue;
        } 
        else if (grade >= 88 && grade <= 100) {
            gradeLetter = "A";
        }
        else if (grade >= 80 && grade <= 87) {
            gradeLetter = "B";
        }
        else if (grade >= 68 && grade <= 79) {
            gradeLetter = "C";   
        } else if (grade >= 60 && grade <= 67) {
            gradeLetter = "D";
        }   else {
        gradeLetter = "F";
        }
        grades.push({num: grade, letter: gradeLetter});
    }
    while (grade !== 999 && (!isNaN(grade)));
    
    for (let i = 0; i < grades.length; i++) {
        document.write(`<p>Grade ${grades[i].num} = ${grades[i].letter}</p>`)
    } 
});