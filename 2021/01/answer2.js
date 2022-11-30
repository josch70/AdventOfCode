var fs = require("fs");
var cnt = 0;

const inputarray = fs
    .readFileSync("input.txt", "utf-8")
    .split('\n')
    .map(Number);

for (let i = 0; i < inputarray.length-2; i++) {
  if (inputarray[i]+inputarray[i+1]+inputarray[i+2]<inputarray[i+1]+inputarray[i+2]+inputarray[i+3]) {cnt++}
}

console.log(`Day01-2: ${cnt}`);
