"use strict";

const region1 = [1540, 1130, 1580, 1105];
const region2 = [2010, 1168, 2305, 4102];
const region3 = [2450, 1847, 2710, 2391];
const region4 = [1845, 1491, 1284, 1575];
const region5 = [2120, 1767, 1599, 3888];

// Total for each quarter for the 5 regions

let quarterOne = (region1[0]+region2[0]+region3[0]+region4[0]+region5[0])
let quarterTwo = (region1[1]+region2[1]+region3[1]+region4[1]+region5[1])
let quarterThree = (region1[2]+region2[2]+region3[2]+region4[2]+region5[2])
let quarterFour = (region1[3]+region2[3]+region3[3]+region4[3]+region5[3])

// Region 1 total, added to totalSales

let regionOneSum = 0;
let totalSales = 0;


for (let i = 0; i < region1.length; i++) {
    regionOneSum += region1[i];
    totalSales += region1[i];
}
// Region 2 total, added to totalSales

let regionTwoSum = 0;

for (let i = 0; i < region2.length; i++) {
    regionTwoSum += region2[i];
    totalSales += region2[i];
}
// Region 3 total, added to totalSales

let regionThreeSum = 0;

for (let i = 0; i < region3.length; i++) {
    regionThreeSum += region3[i];
    totalSales += region3[i];
}
// Region 4 total, added to totalSales

let regionFourSum = 0;

for (let i = 0; i < region4.length; i++) {
    regionFourSum += region4[i];
    totalSales += region4[i];
}
// Region 5 total, added to totalSales

let regionFiveSum = 0;

for (let i = 0; i < region5.length; i++) {
    regionFiveSum += region5[i];
    totalSales += region5[i];
}

document.write(`<h3>\nSales by Quarter\n</h3>`)
document.write(`<p>Q1: $${quarterOne}<br>
                    Q2: $${quarterTwo}<br>
                    Q3: $${quarterThree}<br>
                    Q4: $${quarterFour}<br></p>`)

document.write(`<h3>\nSales by Region\n</h3>`)
document.write(`<p>Region 1: $${regionOneSum}<br>
                    Region 2: $${regionTwoSum}<br>
                    Region 3: $${regionThreeSum}<br>
                    Region 4: $${regionFourSum}<br>
                    Region 5: $${regionFiveSum}</p>`)

document.write(`<h3>\nTotal Sales\n</h3>`)
document.write(`$${totalSales}`)
