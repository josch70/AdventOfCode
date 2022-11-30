var fs = require("fs");
let horizontalP = 0;
let depth = 0;
// const av = [];

const inputarray = fs
    .readFileSync("input.txt", "utf-8")
    .split('\n')
    // .map(Number);

for (let i = 0; i < inputarray.length; i++) {
    input = inputarray[i].split(" ")
    switch(inputarray[i].split(" ")[0]){
        case "forward":
            horizontalP += Number(input[1]);
            break;
        case "down":
            depth += Number(input[1]);
            break;
        case "up":
            depth -= Number(input[1]);
            break;
        
    }
    // console.log (inputarray[i] + ": HorizPos = " + horizontalP + ", Depth = " + depth);
  }

 console.log("HorizPos: " + horizontalP + ", Depth: " + depth + " - Result (H*D): " + horizontalP*depth) 

