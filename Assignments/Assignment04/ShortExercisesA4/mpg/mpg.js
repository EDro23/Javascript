"use strict";

const $ = selector => document.querySelector(selector);

const getErrorMsg = lbl => `${lbl} must be a valid number greater than zero.`;

const focusAndSelect = selector => {
    const elem = $(selector);
    elem.focus();
    elem.select();
};

const calculateMPG = (miles, gallons) => (miles / gallons).toFixed(1);

const processEntries = () => {
    const miles = parseFloat($("#miles").value);
    const gallons = parseFloat($("#gallons").value);

    if (isNaN(miles) || miles <= 0) {
        $("#miles").nextElementSibling.firstChild.nodeValue = "Must be a valid number greater than 0";
        focusAndSelect("#miles");
        
    } else {
        $("#miles").nextElementSibling.firstChild.nodeValue = "*";
    };
    
    if (isNaN(gallons) || gallons <= 0) {
        $("#gallons").nextElementSibling.firstChild.nodeValue = "Must be a valid number greater than 0";
        focusAndSelect("#gallons");

    } else {
        $("#gallons").nextElementSibling.firstChild.nodeValue = "*";
    };
    
    if ((!isNaN(miles)) && miles > 0 && (!isNaN(gallons)) && gallons > 0) {
            $("#mpg").value = calculateMPG(miles, gallons);
    }
};

const clearEntries = () => {
    $("#miles").value = "";
    $("#gallons").value = "";
    $("#mpg").value = "";
    $("#miles").nextElementSibling.firstChild.nodeValue = "*";
    $("#gallons").nextElementSibling.firstChild.nodeValue = "*";
}

document.addEventListener("DOMContentLoaded", () => {
    $("#calculate").addEventListener("click", processEntries);
    $("#clear").addEventListener("click", clearEntries);
    $("#miles").focus();
});