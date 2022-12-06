const path = require("path");
var fs = require("fs");

const inputarray = fs  
    .readFileSync(path.resolve(__dirname, "input.txt"), "utf-8")  
    .split(/\r?\n/)
    // .map(Number);


function hasDuplicates(array) {
    return (new Set(array)).size !== array.length;
}

let count = 14; //Number of processed characters


for (let i=0;i<inputarray[0].length;i++){
    const four = inputarray[0].slice(i,14+i); //returns array of 4 characters from input in a loop
    let dupl = hasDuplicates(four); //checks if array of 4 characters hast duplicates
    if (!dupl) {
        console.log(`${count} characters needs to be processed.`); //if array of 4 characters has no duplicates break loop and print result
        break;
    }
    else{
        count += 1; //if array of 4 characters has still duplicates increase counters
    };
    
}

