"use strict";

const $ = selector => document.querySelector(selector);

document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll("#image_rollovers img");

    // process each img tag
    for (let image of images) {
        const oldURL = image.src;
        const newURL = image.id;

        setTimeout(() => {
            image.src = newURL;
        }, 1000);

        setTimeout(() => {
            image.src = oldURL;
        }, 2000);

        // Set up event handlers for hovering over the image
        image.addEventListener("mouseover", () => {
            image.src = newURL;
        });
        image.addEventListener("mouseout", () => {
            image.src = oldURL;
        });
    }
});