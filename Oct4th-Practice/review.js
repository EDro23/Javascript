"use strict";

document.addEventListener('DOMContentLoaded', () => {
    const textInput = document.querySelector('#textInput');
    const showDateButton = document.querySelector('#dateButton');

    showDateButton.addEventListener('click', () => {
        const currentDate = new Date();
        const formattedDate = `${currentDate.getFullYear()}/${String(currentDate.getMonth() + 1)}/${String(currentDate.getDate())}`;

        alert(`${formattedDate}`)
        textInput.value = formattedDate;
    });

    textInput.addEventListener('dblclick', () => {
        textInput.value = '';
    });
});