"use strict";

const getCookieByName = user => {
    const cookies = document.cookie;
    
    // get the starting index of the cookie name followed by an equals sign
    let start = cookies.indexOf(user + "=");

    if (start === -1) { // No cookie with that name
        return "";      // Return empty string
    } 
    else{   // Get the cookie value
            // Adjust so the name and equals sign aren;t included in the result
        start = start + (user.length + 1);
    }

    // Get the index of the semi-colon at the end of the cookie value
    let end = cookies.indexOf(";", start);
    if (end === -1) {
        end = cookies.length;
    }

    // Use the start and end indexes to get the cookie value
    const cookieValue = cookies.substring(start, end);

    // Return the decoded cookie value
    return decodeURIComponent(cookieValue);
};

const setCookie = (user, value, days) => {

    let cookie = user + "=" + encodeURIComponent(value);

    if (days) {
        cookie += "; max-age=" + days * 24 * 60 * 60;
    }

    cookie += "; path=/";
    document.cookie = cookie;
};

const deleteCookie = user => {
    document.cookie = user + "=''; max-age=0; path=/";
};

const goToPage = url => {
    location.href = url;
};