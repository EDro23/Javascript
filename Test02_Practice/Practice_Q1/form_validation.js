"use strict"

const $ = (selector) => document.querySelector(selector);

document.addEventListener("DOMContentLoaded") = () => {

    const name = $("#name").value;
    const email = $("#email").value;
    const age = $("#age").value;

    const submitButton = $("#submit");

    const nameError = $("#nameError");
    const emailError = $("#emailError");
    const ageError = $("#ageError");

    nameError.value = "";
    emailError.value = "";
    ageError.value = "";

    if (name.value.trim() = "") {
        nameError.value = "Please enter a name"
    };



}

