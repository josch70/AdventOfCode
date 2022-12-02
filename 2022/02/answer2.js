const path = require("path");
var fs = require("fs");

const inputarray = fs  
    .readFileSync(path.resolve(__dirname, "input.txt"), "utf-8")  
    .split(/\r?\n/)
    // .map(Number);


const rules = new Map();
rules.set("A X", 3);
rules.set("A Y", 4);
rules.set("A Z", 8);
rules.set("B X", 1);
rules.set("B Y", 5);
rules.set("B Z", 9);
rules.set("C X", 2);
rules.set("C Y", 6);
rules.set("C Z", 7);

let totalscore = 0;

inputarray.forEach(e => {
    totalscore += rules.get(e);
});

console.log(`Total score: ${totalscore}`);