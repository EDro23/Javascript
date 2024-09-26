"use strict";

let grades = []

do {
    grade = parseFloat(
        prompt("Enter number grade from 0 through 100\nOr enter 999 to end entries", 999));

        if (grade >= 88 && grade <= 100) {
            grade = 'A';
            grades.push(grade);
        }
        if (grade >= 80 && grade <= 87) {
            grade = 'B';
            grades.push(grade);
        }
        if (grade >= 68 && grade <= 79) {
            grade = 'C';
            grades.push(grade);
        }
        if (grade >= 60 && grade <=67) {
            grade = 'D';
            grades.push(grade);
        } else {
            grade = 'F';
            grades.push(grade);
        }
 
}
while ( isNaN(grade) && grade != 999);
