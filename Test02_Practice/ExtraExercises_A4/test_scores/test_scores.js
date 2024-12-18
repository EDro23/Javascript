"use strict";
const $ = selector => document.querySelector(selector);

const names = ["Ben", "Joel", "Judy", "Anne"];
const scores = [88, 98, 77, 88];

const displayResults = () => {
	const h2Element = document.createElement("h2");
	const resultsHeader = document.createTextNode("Results");
	h2Element.appendChild(resultsHeader);

	const divElement = document.createElement("div");
	divElement.setAttribute("id", "results");
	$("#results").parentNode.replaceChild(divElement, $("#results"));
	$("#results").appendChild(h2Element);

	let total = 0;

	for (let score of scores) {
		total += score;
	}
	let avg = total / scores.length

	let highestIndex = -1;
	let highestScore = -1;
	for (let scoreIndex in scores) {
		if (scores[scoreIndex] > highestScore) {
			highestScore = scores[scoreIndex];
			highestIndex = scoreIndex;
		}
	}

	let pAvg = document.createElement("p");
	const avgText = document.createTextNode = (`Average Score: ${avg.toFixed(2)}`);



}

const addScore = () => {
	console.log("button clicked")
}

const displayScores = () => {
    const h2Element = document.createElement("h2");
    const displayScoresHeader = document.createTextNode("Scores"); // Correct function call
    h2Element.appendChild(displayScoresHeader);

    const divElement = document.createElement("h2");
    divElement.setAttribute("id", "scores");
    $("#scores").parentNode.replaceChild(divElement, $("#scores"));
    $("#scores").appendChild(h2Element);
};

document.addEventListener("DOMContentLoaded", () => {
	// add event handlers
	$("#add").addEventListener("click", addScore);
	$("#display_results").addEventListener("click", displayResults);
	$("#display_scores").addEventListener("click", displayScores);
});