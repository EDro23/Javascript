const $ = selector => document.querySelector(selector);

// Process entries function
const processEntries = () => {

    const Cents = parseInt($("#cents").value);
    
    if (isNaN(Cents) || Cents > 99 || Cents < 0) {
        alert("Entered amount must be greater than 0 and less than 99");
        return;
    } else {
        makeChange(Cents);
    }
};

// Make change function
const makeChange = (Cents) => {
    let quarters = 0, dimes = 0, nickels = 0, pennies = 0;

    if (Cents >= 25) {
        quarters = (Cents - (Cents % 25)) / 25;  // Number of quarters
        Cents = Cents % 25;                      // Remainder after quarters
    }

    if (Cents >= 10) {
        dimes = (Cents - (Cents % 10)) / 10;    // Number of dimes
        Cents = Cents % 10;                     // Remainder after dimes
    }

    if (Cents >= 5) {
        nickels = (Cents - (Cents % 5)) / 5;    // Number of nickels
        Cents = Cents % 5;
    }

    pennies = Cents;

    $("#quarters").value = quarters;
    $("#dimes").value = dimes;
    $("#nickels").value = nickels;
    $("#pennies").value = pennies;};

document.addEventListener("DOMContentLoaded", () => {
    // Focus on the cents input field when the page loads
    $("#cents").focus();

    // Add an event listener to the calculate button
    $("#calculate").addEventListener("click", processEntries);

});
