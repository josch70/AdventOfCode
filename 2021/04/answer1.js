const path = require("path");
var fs = require("fs");

const inputarray = fs  
    .readFileSync(path.resolve(__dirname, "input.txt"), "utf-8")  
    .split('\n')
    // .map(Number);

const bingonumbers = inputarray[0].split(",").map(Number);
let boardcount = (inputarray.length-1)/6;
let bi; //boardindex of first row
let winnerboard;
let bingonumber;
// const proccessedNumbers = [];

const countmatches = [];
for (let i = 0; i < boardcount; i++) {
    countmatches[i] = [0,0,0,0,0,0,0,0,0,0];
}

numbers:
for (let i=0;i <bingonumbers.length;i++){
    boards:
    for (let b=0; b<boardcount; b++){
        bi = b*6+2;
        boardrows:
        for (let r=0;r < 5;r++){
            const boardcols = inputarray[bi+r].trim().split(/\s+/).map(Number);
            columns:
            for (let c=0;c<5;c++){
                if (boardcols[c] == bingonumbers[i]){
                    // console.log(`Board ${b+1}: Row: ${r+1} Col: ${c+1} ${bingonumbers[i]} ${boardcols[c]}`);
                    countmatches[b][r] +=1;
                    countmatches[b][c+5] +=1;
                    if (countmatches[b][r] == 5 || countmatches[b][c+5] == 5){
                        winnerboard = b+1;
                        bingonumber = bingonumbers[i];
                        console.log (bingonumbers.slice(0, i+1));
                        console.log(countmatches);
                        console.log(`Winnerboard: ${winnerboard} Number: ${bingonumber}`);
                        let sum = 0;
                        for (let r=0;r<5;r++){
                            const boardcols = inputarray[(winnerboard-1)*6+2+r].trim().split(/\s+/).map(Number);
                            for (let c=0;c<5;c++){
                                if (!bingonumbers.slice(0, i+1).includes(boardcols[c])){
                                    sum += boardcols[c];
                                    

                                }
     
                            }  
                        }
                        let result = sum * bingonumber;
                        console.log(`Result: ${result}`); 
                        break numbers;
                    }

                    break boardrows;
                }
            }
        }

    }

}
