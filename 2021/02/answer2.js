var fs = require("fs");
let horizontalP = 0;
let depth = 0;
let aim = 0;
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
            depth += aim * Number(input[1]);
            break;
        case "down":
            aim += Number(input[1]);
            break;
        case "up":
            aim -= Number(input[1]);
            break;
        
    }
    // console.log (inputarray[i] + ": HorizPos = " + horizontalP + ", Aim = " + aim + ", Depth = " + depth);
  }

 console.log("HorizPos: " + horizontalP + ", Depth: " + depth + " - Result (H*D): " + horizontalP*depth) 

