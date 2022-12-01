const path = require("path");
var fs = require("fs");

const inputarray = fs  
    .readFileSync(path.resolve(__dirname, "input.txt"), "utf-8")  
    .split('\n')
    .map(Number);

let cal = 0;
const cals = [];


for (i=0;i<inputarray.length;i++) {
    cal += inputarray[i];
    if (inputarray[i]==0 || i == inputarray.length-1) {
        cals.push(cal);
        cal = 0;
    }
}


let maxCals = Math.max.apply(Math,cals);
let elve = cals.indexOf(maxCals)+1;
// cals.sort((a, b) => (a - b));
// cals.reverse();

console.log(`Result: Elve ${elve} has the most Cals (${maxCals})`);