"use strict";
const $ = selector => document.querySelector(selector);

// the event handler for the click event of each h2 element
const toggle = evt => {
	const h2Element = evt.currentTarget;               // get the clicked h2
	const divElement = h2Element.nextElementSibling;   // get h2's sibling div

    // Get all h2 elements within #faqs
	const h2Elements = document.querySelectorAll("#faqs h2");

	// Loop through all h2 elements to close others that aren't clicked
	for (let element of h2Elements) {
		if (element !== h2Element) {
			element.classList.remove("minus");
			element.nextElementSibling.classList.remove("open");
		}
	}

	// Toggle the clicked h2 and its corresponding div
	h2Element.classList.toggle("minus");
	divElement.classList.toggle("open");

	evt.preventDefault();
};

document.addEventListener("DOMContentLoaded", () => {
	// get the h2 tags
	const h2Elements = document.querySelectorAll("#faqs h2");

	// attach event handler for each h2 tag
	for (let h2Element of h2Elements) {
		h2Element.addEventListener("click", toggle);
	}
});
