const path = require("path");
var fs = require("fs");

const inputarray = fs
    .readFileSync(path.resolve(__dirname, "input.txt"), "utf-8")
    .split('\n');
    // .map(Number);

const numbers = inputarray[0].split(",").map(Number); //get bingo numbers
inputarray.splice(0,2); //remove first 2 elements of inputarray

const LastPlayedNumbers = [] //Array stores last played numbers

//will play all numbers for given board until it wins and returns the index of the last played number
function boardProcessing(b){
    //0: Count of matches in Row 1, 1: Count of matches in row 2, .... 5: Count of matches in column 1, ......
    const result = [0,0,0,0,0,0,0,0,0,0];
    let LastPlayedNumber = 0;
    for (let i=0;i<numbers.length;i++){
        for (let r=0;r<5;r++){
            let row = inputarray[b*6+r].trim().split(/\s+/).map(Number);
            let c = row.indexOf(numbers[i]);
            if (c > -1){
                result[r] += 1;
                result[c+5] += 1;
                if (result[r] == 5 || result[c+5] == 5){
                    LastPlayedNumber = i;
                    break;
                }
            }
        }
        if (LastPlayedNumber !== 0){
            break;
        }
    }

    return LastPlayedNumber;
    ;

}

function sumUnmarkedNumber(b, n){
    b -= 1;//because b is not null based
    let sum = 0;
    markNmb = numbers.splice(0,n+1); //get all played numbers of this board
    for (let r=0;r<5;r++){
        let row = inputarray[b*6+r].trim().split(/\s+/).map(Number);
        for (c=0;c<row.length;c++){
            if (!markNmb.includes(row[c])) {
                sum += row[c];
            }
        }
    }
    return sum;
}


for (let b=0;b<(inputarray.length+1)/6;b++){
    //processing given board
    LastPlayedNumbers.push(boardProcessing(b));
}

//get highest index of played numbers
let hi = Math.max.apply(Math,LastPlayedNumbers);
//get last played Number
let lastPlayedNumber = numbers[hi];
//get board which wins last
let lastBoard = LastPlayedNumbers.indexOf(hi)+1;
//get sum of all unmarked numbers ob last winner board
let sum = sumUnmarkedNumber(lastBoard,Math.max.apply(Math,LastPlayedNumbers));
//multiply sum with last played number
let res = sum * lastPlayedNumber


console.log(`Last board is ${lastBoard} -- sum of unmarked numbers is ${res}`);
