"use strict";

// get 3 scores from user and add them together
const score1 = parseInt(prompt("Enter test score"));

const score2 = parseInt(prompt("Enter test score"));

const score3 = parseInt(prompt("Enter test score"));

const score4 = parseInt(prompt("Enter test score"));

const total = score1 + score2 + score3 + score4;

// calculate the average
const average = parseInt(total/4);

// Diologue box

// display in browser page

const html = `<p>Score 1 = ${score1}</p>
    <p>Score 2 = ${score2}</p>
    <p>Score 3 = ${score3}</p>
    <p>Score 4 = ${score4}</p>
    <p>Average score = ${average}</p>`;


const html2 = `
    Score 1 = ${score1}
    Score 2 = ${score2}
    Score 3 = ${score3}
    Score 4 = ${score4}
    Average score = ${average}`;

document.write(html);
window.alert(html2)