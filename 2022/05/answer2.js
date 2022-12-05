const path = require("path");
var fs = require("fs");

const inputarray = fs  
    .readFileSync(path.resolve(__dirname, "input.txt"), "utf-8")  
    .split(/\r?\n/)
    // .map(Number);

function moveFromTo(c,f,t){
    let tmp = newStacks[f-1].slice(-c);
    for(let i=0;i<tmp.length;i++){
        newStacks[t-1].push(tmp[i]);
    };
    newStacks[f-1].splice(-tmp.length);

}

let empty = inputarray.findIndex(e => {return e == ""}); //find empty line

const stacks = inputarray.splice(0,empty); //move stacks to new array
inputarray.shift(); //remove first line in remaining array

//transform stacks

//1: transform every line to array
stacks.forEach((e,i,a) => {
    a[i] = e.match(/.{1,4}/g);
});

//2: trim and remove brackets
stacks.forEach((e,i,a) => {
    a[i].forEach((e,i,a) => {
        a[i] = a[i].trim().replace(/[\[\]]/g,"");
    })
})

//3: put every stack in a separate array element
//creates array of array
const newStacks = new Array(stacks[0].length);
for (let i=0;i<newStacks.length;i++){
    newStacks[i] = new Array(0);
};

//moves elements to new array
for (i=stacks.length-2;i>=0;i--){
    for (j=0;j<stacks[0].length;j++){
        if (stacks[i][j] != ""){
            newStacks[j].push(stacks[i][j]);
        };
    };
};

inputarray.forEach(e => {
    let vals = e.match(/\d+/g).map(Number);
    moveFromTo(vals[0],vals[1],vals[2]);
});

let res = "";

newStacks.forEach(e => {
    res = res + e[e.length-1];
})

console.log (`Result: ${res}`);