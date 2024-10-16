"use strict";
const $ = selector => document.querySelector(selector);

const processEntry = () => {

    const Income = parseInt($("#income").value);
    
    if (isNaN(Income) || Income < 0) {
        alert("Entered amount must be greater than 0");
        return;
    } else {
        calculateTax(Income);
    }
};

const calculateTax = (Income) => {
    let incomeTax = 0;

    if (Income <= 9875) {
        incomeTax = Income * 0.10;
    } 
    else if (Income <= 40125) {
        incomeTax = 987.50 + ((Income - 9875) * 0.12);  
    } 
    else if (Income <= 85525) {
        incomeTax = 4617.50 + ((Income - 40125) * 0.22);
    } 
    else if (Income <= 163300) {
        incomeTax = 14605.50 + ((Income - 85525) * 0.24);
    } 
    else if (Income <= 207350) {
        incomeTax = 33271.50 + ((Income - 163300) * 0.32);
    } 
    else if (Income <= 518400) {
        incomeTax = 47367.50 + ((Income - 207350) * 0.35);
    } 
    else {
        incomeTax = 156235.00 + ((Income - 518400) * 0.37);
    }

    // Update the tax field with the calculated value
    $("#tax").value = incomeTax.toFixed(2);

	$("#income").focus();
};
document.addEventListener("DOMContentLoaded", () => {
	// add event handlers
	$("#income").focus();
	$("#calculate").addEventListener("click", processEntry);
	$("#income").focus();

});