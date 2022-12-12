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



inputarray.forEach((e,i,a) => {
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

const idMapping = directories.reduce((acc, el, i) => {
    acc[el.cd] = i;
    return acc;
}, {});

//set the correct sums of the directories
directories.forEach((v,i) => {
    if (i > 0){
    correctSums(v, v.sum);
    }
});

const atLeast = 30000000; //unused space needed for part two
let free = 70000000 - directories[idMapping["/"]].sum; //currently free space
let req = atLeast - free; //required space which is needed to get at least 30000000
let nec = 0;


//checks if sum of directory covers requirements
//if yes, store value in variable "nec" and check if there is another directory which have a smaller sum.
directories.forEach((e) => {
    if (e.sum >= req){
        if (nec == 0) {
            nec = e.sum;
        }
        else {
            if (e.sum < nec){
                nec = e.sum;
            };
        };
    };
});


console.log(`The sum of the directory which has to be deleted: ${nec}`);
    
