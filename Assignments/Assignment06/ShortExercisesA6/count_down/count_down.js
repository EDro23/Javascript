"use strict";

const $ = (selector) => document.querySelector(selector);

document.addEventListener("DOMContentLoaded", () => { 
    $("#countdown").addEventListener("click", () => {
        const eventName = $("#event").value;
        const eventDate = $("#date").value;  
        const messageLbl = $("#message");  
        
        // make sure user entered task and event date 
        if (eventName.length == 0 || eventDate.length == 0) {
            messageLbl.textContent = "Please enter both a name and a date.";
            return;
        }  
      
        // make sure event date string has two slashes 
        const dateParts = eventDate.split("/");
        if (dateParts.length != 3) {   
            messageLbl.textContent = "Please enter the date in MM/DD/YYYY format.";
            return;
        } 
        
        // extract and validate month, day, and year
        const month = parseInt(dateParts[0]);
        const day = parseInt(dateParts[1]);
        const year = parseInt(dateParts[2]);

        // validate the month
        if (isNaN(month) || month < 1 || month > 12) {
            messageLbl.textContent = "Please enter a valid month (1-12).";
            return;
        }

        // validate the year (must be 4 digits)
        if (isNaN(year) || year.toString().length !== 4) {
            messageLbl.textContent = "Please enter a valid 4-digit year.";
            return;
        }

        // validate the day based on the month and year
        const daysInMonth = new Date(year, month, 0).getDate(); // calculates days in the given month/year
        if (isNaN(day) || day < 1 || day > daysInMonth) {
            messageLbl.textContent = `Please enter a valid day (1-${daysInMonth}) for the given month.`;
            return;
        }

        // convert event date string to Date object and check for validity
        let date = new Date(`${year}-${month}-${day}`);
        if (date == "Invalid Date") {
            messageLbl.textContent = "Please enter a valid date in MM/DD/YYYY format." ;
            return;
        }

        // capitalize each word of event name
        let formattedName = "";
        const words = eventName.split(" ");
        for (const i in words) {
            const firstLetter = words[i].substring(0,1).toUpperCase();
            const word = firstLetter + words[i].substring(1).toLowerCase();
            formattedName += word.padEnd(word.length + 1);
        } 
        formattedName = formattedName.trimEnd();     

        // calculate days
        const today = new Date();
        const msFromToday = date.getTime() - today.getTime();
        const msForOneDay = 24 * 60 * 60 * 1000; // hrs * mins * secs * milliseconds  
        let daysToDate = Math.ceil( msFromToday / msForOneDay ); 

        // create and display message 
        let msg = "";
        date = date.toDateString();
        if (daysToDate == 0) {
            msg = `Hooray! Today is ${formattedName}! (${date})`;
        }
        else if (daysToDate > 0) {
            msg = `${daysToDate} day(s) until ${formattedName}! (${date})`;
        }
        else if (daysToDate < 0) {
            daysToDate = Math.abs(daysToDate);
            msg = `${formattedName} happened ${daysToDate} day(s) ago. 
                  (${date})`;
        }
        messageLbl.textContent = msg;
    });
    
    $("#event").focus();
});
