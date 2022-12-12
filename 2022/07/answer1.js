const path = require("path");
var fs = require("fs");

const inputarray = fs  
    .readFileSync(path.resolve(__dirname, "input.txt"), "utf-8")  
    .split(/\r?\n/)
    // .map(Number);

//Add the sum of directory to the parent directories
function correctSums (el,size){
    directories[idMapping[el.parent]].sum += size;
    if (el.parent != "/"){
        correctSums (directories[idMapping[el.parent]],size);
    };
}


const directories = [];
let totalSum = 0;
let currentDir = "";
let parentDir = "";


inputarray.forEach((e,i) => {
    if (e.match(/^\$ cd/)){
        let dir = e.split(" ")[2];
        if (dir == "/") {
            currentDir = "/";
            parentDir = "";
        }
        else if (dir == ".."){
            currentDir = parentDir;
            parentDir = currentDir.slice(0,currentDir.lastIndexOf("/"));
            if (parentDir == ""){
                parentDir = "/";
            };
        }
        else {
            parentDir = currentDir;
            if (currentDir == "/") {
                currentDir = currentDir + dir;
            }
            else {
                currentDir = currentDir + "/" + dir;
            };
            
        };
    }
    else {
        if (e.match(/^\d/)) {
            totalSum += parseInt(e.split(" ")[0]);
        };
        if (i+1 < inputarray.length) {
            if (inputarray[i+1].charAt(0) == "$") {
                directories.push({cd: currentDir, sum:totalSum, parent: parentDir});
                totalSum = 0;
            };
        }
        else {
            directories.push({cd: currentDir, sum:totalSum, parent: parentDir});
            totalSum = 0; 
        };

    };
});

//
const idMapping = directories.reduce((acc, el, i) => {
    acc[el.cd] = i;
    return acc;
}, {});


directories.forEach((v,i) => {
    if (i > 0){
    correctSums(v, v.sum);
    }
})

let finalSum = 0;
directories.forEach(v => {
    if (v.sum <= 100000){
        finalSum += v.sum;
    }
});


console.log(`The sum of all directories with at most 10000: ${finalSum}`);
    
