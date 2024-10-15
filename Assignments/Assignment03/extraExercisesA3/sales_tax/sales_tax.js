"use strict";

const $ = selector => document.querySelector(selector);

// Function for processing the entries
const processEntries = () => {
    
    // Retrieve and convert the input values to numbers
    const subTotal = parseFloat($("#subtotal").value);
    const taxRate = parseFloat($("#tax_rate").value);

    // Validate inputs
    if (isNaN(subTotal) || subTotal > 10000 || subTotal < 0) {
        alert("Subtotal must be > 0 and < 10000");
        return;
    } else if (isNaN(taxRate) || taxRate > 12 || taxRate < 0) {
        alert("Tax Rate must be > 0 and < 12");
        return;
    } else {
        // Perform calculations
        const salesTax = (subTotal * taxRate / 100).toFixed(2);
        const total = (parseFloat(salesTax) + subTotal).toFixed(2);

        // Update the values in the sales tax and total fields
        $("#sales_tax").value = salesTax;
        $("#total").value = total;
        $("#subtotal").focus();
    }
};

// Function for clearing the entries
const clearEntries = () => {
    $("#subtotal").value = '';
    $("#tax_rate").value = '';
    $("#sales_tax").value = '';
    $("#total").value = '';
    $("#subtotal").focus();
}

// Function for clearing subtotal
const clearSubTotal = () => {
    $("#subtotal").value = '';
    $("#subtotal").focus();

}

// Function for clearing taxrate
const clearTaxRate = () => {
    $("#tax_rate").value = '';
    $("#tax_rate").focus();

}

document.addEventListener("DOMContentLoaded", () => {

    // Focus onto subtotal
    $("#subtotal").focus();

    // Event listener for caclulate button
    $("#calculate").addEventListener("click", processEntries);

    // Clear subtotal on click
    $("#subtotal").addEventListener("click", clearSubTotal);

    // Clear taxrate on click
    $("#tax_rate").addEventListener("click", clearTaxRate);

    //Event listener for clear button
    $("#clear").addEventListener("click", clearEntries);
});
