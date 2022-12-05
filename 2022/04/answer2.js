const path = require("path");
var fs = require("fs");

const inputarray = fs  
    .readFileSync(path.resolve(__dirname, "input.txt"), "utf-8")  
    .split(/\r?\n/)
    // .map(Number);

let sum = 0;

function rangePartlyContainOther (pair){
    starta = parseInt(pair.split(",")[0].split("-")[0]);
    enda = parseInt(pair.split(",")[0].split("-")[1]);
    startb = parseInt(pair.split(",")[1].split("-")[0]);
    endb = parseInt(pair.split(",")[1].split("-")[1]);

    if ((starta <=startb && enda>= startb) || (startb <=starta && endb>= starta)){
        return true;
    };

}

for (let e=0; e<inputarray.length; e++){
    if (rangePartlyContainOther(inputarray[e])){
        sum += 1;
    };

}

console.log(`There are ${sum} pairs which overlap.`);