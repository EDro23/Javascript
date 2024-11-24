"use strict";

const $ = (selector) => document.querySelector(selector);

const calculateDiscount = (customer, subtotal) => {
    if (customer == "reg") {
        if (subtotal >= 100 && subtotal < 250) {
            return .1;
        } else if (subtotal >= 250 && subtotal < 500) {
            return  .25;
        } else if (subtotal >= 500) {
            return .3;
        } else {
            return 0;
        }        
    }
    else if (customer == "loyal") {
        return .3;        
    }
    else if (customer == "honored") {
        if (subtotal < 500) {
            return .4;
        }
        else {
            return .5;
        }    
    }
};

// Helper function to format a date in MM/DD/YYYY format
const formatDate = (date) => {
    const month = date.getMonth() + 1; // Months are 0-indexed
    const day = date.getDate();
    const year = date.getFullYear();
    return `${month.toString().padStart(2, "0")}/${day.toString().padStart(2, "0")}/${year}`;
};

document.addEventListener("DOMContentLoaded",  () => {

    $("#calculate").addEventListener("click", () => {
        const customerType = $("#type").value;
        let subtotal = $("#subtotal").value;
        subtotal = parseFloat(subtotal);
        if ( isNaN(subtotal) || subtotal <= 0) {
            alert("Subtotal must be a number greater than zero.");
            $("#clear").click();
            $("#subtotal").focus();
            return;
        }

        const discountPercent = calculateDiscount(customerType, subtotal);
        const discountAmount = subtotal * discountPercent;
        const invoiceTotal = subtotal - discountAmount;

        // Handle invoice date
        let invoiceDateInput = $("#invoice_date").value.trim();
        let invoiceDate;

        if (invoiceDateInput === "") {
            // Use the current date if no date is provided
            invoiceDate = new Date();
            $("#invoice_date").value = formatDate(invoiceDate);
        } else {
            // Validate the invoice date
            invoiceDate = new Date(invoiceDateInput);
            if (invoiceDate == "Invalid Date") {
                alert("Please enter a valid date in MM/DD/YYYY format.");
                $("#invoice_date").focus();
                return;
            }
        }

        // Calculate due date (30 days after the invoice date)
        const dueDate = new Date(invoiceDate);
        dueDate.setDate(dueDate.getDate() + 30);
        $("#due_date").value = formatDate(dueDate);

        $("#subtotal").value = subtotal.toFixed(2);
        $("#percent").value = (discountPercent * 100).toFixed(2);
        $("#discount").value = discountAmount.toFixed(2);
        $("#total").value = invoiceTotal.toFixed(2);

        // set focus on type drop-down when done  
        $("#type").focus();

    });
    
    $("#clear").addEventListener("click", () => {

        $("#type").value = "reg";
        $("#subtotal").value = "";
        $("#invoice_date").value = "";
        $("#percent").value = "";
        $("#discount").value = "";
        $("#total").value = "";
        $("#due_date").value = "";

        // set focus on type drop-down when done
        $("#type").focus();
    })

    // set focus on type drop-down on initial load
    $("#type").focus();
});