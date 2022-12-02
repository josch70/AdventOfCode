const path = require("path");
var fs = require("fs");

const inputarray = fs  
    .readFileSync(path.resolve(__dirname, "input.txt"), "utf-8")  
    .split('\n')
    // .map(Number);


const rules = new Map();
rules.set("A X", 4);
rules.set("A Y", 8);
rules.set("A Z", 3);
rules.set("B X", 1);
rules.set("B Y", 5);
rules.set("B Z", 9);
rules.set("C X", 7);
rules.set("C Y", 2);
rules.set("C Z", 6);

let totalscore = 0;

inputarray.forEach(e => {
    totalscore += rules.get(e.slice(0,3));
});

console.log(`Total score: ${totalscore}`);