"use strict"

const names = ["Ben", "Joel", "Judy", "Anne"];
const scores = [88, 98, 77, 88];

const $ = selector => document.querySelector(selector);

const addScore = () => {
	// Get user entries
	const name = $("#name").value();
	const score = parseInt($("#score").value);
	let isValid = true;

	// Check entries for validity
	if (name === "") {
		$("#name").nextElementSibling.textContent = "This field is required.";
		isValid = false;
	} else {
		$("#name").nextElementSibling.textContent = "";
	}

	if (isNaN(score) || score < 0 || score > 100) {
		$("#score").nextElementSibling.textContent = "You must enter a valid score.";
		isValid = false;
	} else {
		$("#score").nextElementSibling.textContent = "";
	}

	// If valid, add to arrays and clear input fields and display area
	if (isValid) {
		names.push(name);
		scores.push(score);
		$("#name").value = "";
		$("#score").value = "";
		$("#scores_display").value = ""; // Clear the textarea

		$("#name").focus();
	}
};

const displayScores = () => {
	let output = "";

	for (let i = 0; i < names.length; i++) {
		output += `${names[i]}: ${scores[i]}\n`;
	}

	$("#scores_display").value = output;
};

document.addEventListener("DOMContentLoaded", () => {
	$("#add").addEventListener("click", addScore);
	$("#display_scores").addEventListener("click", displayScores);
	$("#name").focus();
});
