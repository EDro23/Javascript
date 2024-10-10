"use strict";

document.addEventListener('DOMContentLoaded', () => {
    const textInput = document.querySelector('#textInput');
    const showDateButton = document.querySelector('#dateButton');

    showDateButton.addEventListener('click', () => {
        const currentDate = new Date();
        const formattedDate = `${currentDate.getFullYear()}**${String(currentDate.getMonth() + 1).padStart(2,"0")}**${String(currentDate.getDate()).padStart(2,"0")}`;

        alert(`${formattedDate}`)
        textInput.value = formattedDate;
    });

    textInput.addEventListener('dblclick', () => {
        textInput.value = '';
    });
});