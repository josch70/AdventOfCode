const path = require("path");
var fs = require("fs");

const inputarray = fs  
    .readFileSync(path.resolve(__dirname, "input.txt"), "utf-8")  
    .split(/\r?\n/)
    // .map(Number);

const points = new Map();
points.set("w", 6);
points.set("d", 3);
points.set("l", 0);
points.set("X", 1);
points.set("Y", 2);
points.set("Z", 3);

const rules = new Map();
rules.set("A X", "d");
rules.set("A Y", "w");
rules.set("A Z", "l");
rules.set("B X", "l");
rules.set("B Y", "d");
rules.set("B Z", "w");
rules.set("C X", "w");
rules.set("C Y", "l");
rules.set("C Z", "d");


let totalscore = 0;

inputarray.forEach(e => {
    let result = rules.get(e);
    totalscore += points.get(result);
    totalscore += points.get(e.charAt(2));
});

console.log(`Total score: ${totalscore}`);