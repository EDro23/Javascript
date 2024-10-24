"use strict";

const region1 = [1540, 1130, 1580, 1105];
const region2 = [2010, 1168, 2305, 4102];
const region3 = [2450, 1847, 2710, 2391];
const region4 = [1845, 1491, 1284, 1575];
const region5 = [2120, 1767, 1599, 3888];

let totalSum = 0

// Get the totals for Quarter one from all regions

let quarterOneTotal = region1[0] + region2[0] + region3[0] + region4[0] + region5[0];

let quarterTwoTotal = region2[1] + region2[1] + region3[1] + region4[1] + region5[1];

let quarterThreeTotal = region3[2] + region2[2] + region3[2] + region4[2] + region5[2];

let quarterFourTotal = region4[3] + region2[3] + region3[3] + region4[3] + region5[3];

// Total sales by region code

let regionOneSum = 0;
let regionTwoSum = 0;
let regionThreeSum = 0;
let regionFourSum = 0;
let regionFiveSum = 0;

// Region one sum
for (let i = 0; i < region1.length; i++) {
    regionOneSum += region1[i];
    totalSum += region1[i];
}

// Region two sum
for (let i = 0; i < region2.length; i++) {
    regionTwoSum += region2[i];
    totalSum += region2[i];
}

// Region three sum
for (let i = 0; i < region3.length; i++) {
    regionThreeSum += region3[i];
    totalSum += region3[i];
}

// Region four sum
for (let i = 0; i < region4.length; i++) {
    regionFourSum += region4[i];
    totalSum += region4[i];
}

// Region five sum
for (let i = 0; i < region5.length; i++) {
    regionFiveSum += region5[i];
    totalSum += region5[i]
}

// Display in browser

document.write(`<p>
<h2>Sales by Quarter</h2>
Q1: $${quarterOneTotal}<br>
Q2: $${quarterTwoTotal}<br>
Q3: $${quarterThreeTotal}<br>
Q4: $${quarterFourTotal}<br>
<h2>Sales by Region</h2>
Region 1: $${regionOneSum}<br>
Region 2: $${regionTwoSum}<br>
Region 3: $${regionThreeSum}<br>
Region 4: $${regionFourSum}<br>
Region 5: $${regionFiveSum}<br>
<h2>Total Sales</h2>
$${totalSum}
</p>`);