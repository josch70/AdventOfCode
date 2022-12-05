const path = require("path");
var fs = require("fs");

const inputarray = fs  
    .readFileSync(path.resolve(__dirname, "input.txt"), "utf-8")  
    .split(/\r?\n/)
    // .map(Number);

//find first character which is in both strings
function findOverlap(f, s) {

    for(let i in f) {
        if (s.includes(f[i])) {
            return f[i];
        };

    };

    }

let sum = 0;

inputarray.forEach(e => {
     let l = e.length; //get length of input string
     let first = e.slice(0,l/2); //get first half of input string
     let second = e.slice(l/2); //get second half of input string
     let o = findOverlap(first,second) //gets overlapping character
     let p = o.charCodeAt(); //gets unicode for overlapping character
     if (p > 90) { 
         p = p - 96; //greater 90 means uppercase character. subtract 96 gets correct priority
     } else {
         p = p - 38; //lower 90 means lowercase character. subtract 38 gets correct priority
     };
     sum += p;
});

console.log (`Sum of priorities is ${sum}`);