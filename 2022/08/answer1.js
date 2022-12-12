const path = require("path");
var fs = require("fs");

const inputarray = fs  
    .readFileSync(path.resolve(__dirname, "input.txt"), "utf-8")  
    .split(/\r?\n/)
    // .map(Number);

let visibleOnEdges = (inputarray[0].length * 2) + ((inputarray.length-2) *2);
let visibleInInterior = 0;
let visibleTotal = 0;

let rows = inputarray.map((e)=>{return e.split("").map(Number)});
console.log(rows);
let columns = rows[0].map((_, colIndex) => rows.map(row => row[colIndex]));

// let x = rows[1].slice(0,1).some((e)=>{return e < rows[1][1]});
//row loop
for (let r=1;r<rows.length-1;r++){
    //col loop
    for (let c=1;c<columns.length-1;c++){
        let vfl = rows[r].slice(0,c).every((e)=>{return e < rows[r][c]});
        let vfr = rows[r].slice(c+1).every((e)=>{return e < rows[r][c]});
        let vft = columns[c].slice(0,r).every((e)=>{return e < rows[r][c]});
        let vfb = columns[c].slice(r+1).every((e)=>{return e < rows[r][c]});
        if (vfl || vfr || vft || vfb){
            visibleInInterior += 1;
        };
    };
};

visibleTotal = visibleOnEdges + visibleInInterior;

console.log(`${visibleTotal}`);
