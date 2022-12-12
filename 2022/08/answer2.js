const path = require("path");
var fs = require("fs");

const inputarray = fs  
    .readFileSync(path.resolve(__dirname, "input.txt"), "utf-8")  
    .split(/\r?\n/)
    // .map(Number);

function getDistance (e){
    return e >= rows[this.r][this.c];

}


let visibleOnEdges = (inputarray[0].length * 2) + ((inputarray.length-2) *2);
let visibleInInterior = 0;
let visibleTotal = 0;
const scenicScore = [];

//rows as array
let rows = inputarray.map((e)=>{return e.split("").map(Number)});
//transpose rows
let columns = rows[0].map((_, colIndex) => rows.map(row => row[colIndex]));

//row loop
for (let r=1;r<rows.length-1;r++){
    //col loop
    for (let c=1;c<columns.length-1;c++){
        let dl = rows[r].slice(0,c).findLastIndex(getDistance,{r:r,c:c});
        if (dl == -1){
            dl = rows[r].slice(0,c).length;
        } else {
            dl = c-dl;
        };
        let dr = rows[r].slice(c+1).findIndex(getDistance,{r:r,c:c});
        if (dr == -1){
            dr = rows[r].slice(c+1).length;
        } else {
            dr = dr + 1;
        };
        let du = columns[c].slice(0,r).findLastIndex(getDistance,{r:r,c:c});
        if (du == -1){
            du = columns[r].slice(0,r).length;
        } else {
            du = r-du;
        };
        let dd = columns[c].slice(r+1).findIndex(getDistance,{r:r,c:c});
        if (dd == -1){
            dd = columns[r].slice(r+1).length;
        } else {
            dd = dd + 1;
        };

    scenicScore.push(dl * dr * du * dd); 
    };
};

scenicScore.sort((a,b) => a-b);

console.log(`${scenicScore[scenicScore.length-1]}`);
