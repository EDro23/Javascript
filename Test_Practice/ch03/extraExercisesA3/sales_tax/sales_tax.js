"use strict";

const $ = selector => document.querySelector(selector);

const processEntries = () => {

    const subTotal = parseFloat($("#subtotal").value);
    const taxRate = parseFloat($("#tax_rate").value);

    if (isNaN(subTotal) || 0 < subTotal > 10000) {
        $("#subtotal").nextAttributeSibling.nextChild.nodeValue = "Must be < 0 and < 10000"
    }

    const salesTax = subTotal * (taxRate / 100);

    const totalValue = subTotal + salesTax;

    $("#sales_tax").value = salesTax
    $("#total").value = totalValue
}

const clearAllEntries = () => {
    $("#subtotal").value = '';
    $("#tax_rate").value = '';
    $("#sales_tax").value = '';
    $("#total").value = '';
    $("#subtotal").focus();
}

document.addEventListener("DOMContentLoaded", () => {
    $("#subtotal").focus();
    $("#calculate").addEventListener("click", processEntries);
    $("#clear").addEventListener("click", clearAllEntries);
});

