"use strict";

const getMonthText = (currentMonth) => {
    if (currentMonth === 0) { return "January"; }
    else if (currentMonth === 1) { return "February"; }
    else if (currentMonth === 2) { return "March"; }
    else if (currentMonth === 3) { return "April"; }
    else if (currentMonth === 4) { return "May"; }
    else if (currentMonth === 5) { return "June"; }
    else if (currentMonth === 6) { return "July"; }
    else if (currentMonth === 7) { return "August"; }
    else if (currentMonth === 8) { return "September"; }
    else if (currentMonth === 9) { return "October"; }
    else if (currentMonth === 10) { return "November"; }
    else if (currentMonth === 11) { return "December"; }
};

const getLastDayofMonth = (year, currentMonth) => {
    return new Date(year, currentMonth + 1, 0).getDate();
};

document.addEventListener("DOMContentLoaded", () => {
    const today = new Date();
    const currentYear = today.getFullYear();
    const currentMonth = today.getMonth();

    // name of the current month and display it with the year
    const monthName = getMonthText(currentMonth);
    document.getElementById("month_year").textContent = `${monthName} ${currentYear}`;

    // first day of the current month
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

    // last day of the current month
    const lastDayOfMonth = getLastDayofMonth(currentYear, currentMonth);

    // calendar table element
    const calendarTable = document.getElementById("calendar");

    // first row for the calendar
    let row = document.createElement("tr");

    // blank cells 
    for (let i = 0; i < firstDayOfMonth; i++) {
        const blankCell = document.createElement("td");
        row.appendChild(blankCell);
    }

    // add cells for each day of the month
    for (let day = 1; day <= lastDayOfMonth; day++) {
        const cell = document.createElement("td");
        cell.textContent = day;
        row.appendChild(cell);

        // full rows
        if ((firstDayOfMonth + day) % 7 === 0) {
            calendarTable.appendChild(row);
            row = document.createElement("tr");
        }
    }

    // append the last row if not empty
    if (row.children.length > 0) {
        calendarTable.appendChild(row);
    }
});
