const path = require("path");
var fs = require("fs");

const inputarray = fs  
    .readFileSync(path.resolve(__dirname, "input.txt"), "utf-8")  
    .split(/\r?\n/)
    // .map(Number);

//find first character which is in all strings
function findOverlap(f, s, t) {

    for(let i in f) {
        if (s.includes(f[i]) && t.includes(f[i])) {
            return f[i];
        };

    };

    }

let sum = 0;

for (let e = 0;e < inputarray.length; e = e+3) {
    let first = inputarray[e];
    let second = inputarray[e+1];
    let third = inputarray[e+2];
    let o = findOverlap(first,second,third); //gets overlapping character
    let p = o.charCodeAt(); //gets unicode for overlapping character
     if (p > 90) { 
         p = p - 96; //greater 90 means uppercase character. subtract 96 gets correct priority
     } else {
         p = p - 38; //lower 90 means lowercase character. subtract 38 gets correct priority
     };
     sum += p;
};

console.log (`Sum of priorities is ${sum}`);