"use strict";
const $ = selector => document.querySelector(selector);

const names = ["Ben", "Joel", "Judy", "Anne"];
const scores = [88, 98, 77, 88];

const displayResults = () => {
	const h2Element = document.createElement("h2");
	const resultsText = document.createTextNode("Results");
	h2Element.appendChild(resultsText);

	const divElement = document.createElement("div");
	divElement.setAttribute("id", "results");
	$("#results").parentNode.replaceChild(divElement, $("#results"));
	$("#results").appendChild(h2Element);

	let total = 0;
	for (let score of scores) {
		total += score;
	}
	let avg = total / scores.length;

	let highestIndex = -1;
	let highestScore = -1;
	for (let scoreIndex in scores) {
		if (scores[scoreIndex] > highestScore) {
			highestScore = scores[scoreIndex];
			highestIndex = scoreIndex;
		}
	}

	const pAvg = document.createElement("p");
	const avgText = document.createTextNode(`Average score = ${avg.toFixed(2)}`);
	pAvg.appendChild(avgText);

	$("#results").appendChild(pAvg);

	const pHigh = document.createElement("p");
	const highText = document.createTextNode(`${names[highestIndex]} with a score of ${scores[highestIndex]}`);
	pHigh.appendChild(highText);

	$("#results").appendChild(pHigh);
}

const displayScores = () => {

	const h2Element = document.createElement("h2");
	const scoresText = document.createTextNode("Scores");
	h2Element.appendChild(scoresText);

	// new div element for scores
	const divElement = document.createElement("div");
	divElement.setAttribute("id", "scores");

	// replacing old scores div if it exists
	$("#scores").parentNode.replaceChild(divElement, $("#scores"));
	$("#scores").appendChild(h2Element);

	// Adding each score with the associated name to the scores div
	for (let i = 0; i < names.length; i++) {
		const pScore = document.createElement("p");
		const scoreText = document.createTextNode(`${names[i]}: ${scores[i]}`);
		pScore.appendChild(scoreText);
		$("#scores").appendChild(pScore);
	}
}

const addScore = () => {
	const nameInput = $("#name").value.trim();
    const scoreInput = parseInt($("#score").value, 10);

    // Check for existing error elements or create them manually
    let nameError = $("#name").nextElementSibling;
    let scoreError = $("#score").nextElementSibling;

    // If name error element does not exist, create it and insert it
    if (!nameError || !nameError.classList.contains("error-message")) {
        nameError = document.createElement("span");
        nameError.classList.add("error-message");
        nameError.style.color = "red";  
        $("#name").after(nameError);
    }
    // If score error element does not exist, create it and insert it
    if (!scoreError || !scoreError.classList.contains("error-message")) {
        scoreError = document.createElement("span");
        scoreError.classList.add("error-message");
        scoreError.style.color = "red";
        $("#score").after(scoreError);
    }

    // Clear previous error messages by setting text content to an empty string
    nameError.textContent = "";
    scoreError.textContent = "";

    let isValid = true;

    if (nameInput === "") {
        nameError.textContent = "Please enter a name";
        isValid = false;
    }

    if (isNaN(scoreInput) || scoreInput < 0 || scoreInput > 100) {
        scoreError.textContent = "Score must be between 0 and 100";
        isValid = false;
    }

    // If validation fails, exit the function early
    if (!isValid) return;

    names.push(nameInput);
    scores.push(scoreInput);

    $("#name").value = "";
    $("#score").value = "";
    $("#name").focus();

	// update by calling functions again
    displayScores();
    displayResults();
}

document.addEventListener("DOMContentLoaded", () => {

	$("#name").focus();

	// add event handlers
	$("#add").addEventListener("click", addScore);
	$("#display_results").addEventListener("click", displayResults);
	$("#display_scores").addEventListener("click", displayScores);
});