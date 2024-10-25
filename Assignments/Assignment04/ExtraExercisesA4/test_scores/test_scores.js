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
		if (scores[highestIndex] > highestScore) {
			highestScore = scores[scoreIndex];
			highestIndex = scoreIndex

		}
	}

	const pAvg = document.createElement("p");
	const avgText = document.createTextNode(`Average score = ${avg}`);
	pAvg.appendChild(avgText);

	$("#results").appendChild(pAvg);

	// $("#results").appendChild(h2Element);

	const pHigh = document.createElement("p");
	const highText = document.createTextNode(`${names[highestIndex]} with a score of ${scores[highestIndex]}`)
	pHigh.appendChild(highText);

	$("#results").appendChild(pHigh);
}

document.addEventListener("DOMContentLoaded", () => {
	// add event handlers
	//$("#add").addEventListener("click", addScore);
	$("#display_results").addEventListener("click", displayResults);
	//$("#display_scores").addEventListener("click", displayScores);
});