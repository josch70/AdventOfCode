var fs = require("fs");
var cnt = 0;

const inputarray = fs
    .readFileSync("input.txt", "utf-8")
    .split('\n')
    .map(Number);

for (let i = 1; i < inputarray.length; i++) {
  if (inputarray[i-1]<inputarray[i]) {cnt++}
}

console.log("Day01-1: " + cnt);

