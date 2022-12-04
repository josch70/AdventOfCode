const path = require("path");
var fs = require("fs");

const inputarray = fs  
    .readFileSync(path.resolve(__dirname, "input.txt"), "utf-8")  
    .split(/\r?\n/)
    // .map(Number);

const coord = new Map();



inputarray.forEach(e => {
    let startx = e.split(" -> ")[0].split(",").map(Number)[0];
    let starty = e.split(" -> ")[0].split(",").map(Number)[1];
    let endx = e.split(" -> ")[1].split(",").map(Number)[0];
    let endy = e.split(" -> ")[1].split(",").map(Number)[1];


    
    if (startx == endx) { //only vertical lines
        switch (starty > endy) {
            case true:
                for (let c=endy;c<=starty;c++){
                    //if entry in map does not exists it will be created with value 1
                    //if it exists, value will be incremented
                    //it is done with logical OR 
                    //example:
                    //if value doesn't exists, coord.get(startx+","+c returns "undefined"
                    //undefined + 1 = NaN
                    //NaN || 1 = 1
                    //
                    //if value exists, coord.get(startx+","+c returns value (e.g. 2)
                    //2 + 1 = 3
                    //3 || 1 = 3
                    coord.set(startx+","+c,coord.get(startx+","+c) + 1 || 1);
                };
                break;
            case false:
                for (let c=starty;c<=endy;c++){
                    coord.set(startx+","+c,coord.get(startx+","+c) + 1 || 1);
                };
                break;
        }
    } else if (starty == endy){ //only horizontal lines
        switch (startx > endx) {
            case true:
                for (let c=endx;c<=startx;c++){
                    coord.set(c+","+endy,coord.get(c+","+endy) + 1 || 1);
                };
                break;
            case false:
                for (let c=startx;c<=endx;c++){
                    coord.set(c+","+endy,coord.get(c+","+endy) + 1 || 1);
                };
                break;
        }       
    }
    else { // diagonal lines
        switch (startx < endx) {
            case true:
                switch (starty < endy) {
                    case true:
                        for (let c=0; c <= Math.abs(startx - endx); c++){
                            let x = startx + c;
                            let y = starty + c;
                            coord.set(x+","+y, coord.get(x+","+y) + 1 || 1);
                        };
                        break;
                    case false:
                        for (let c=0; c <= Math.abs(startx - endx); c++){
                            let x = startx + c;
                            let y = starty - c;
                            coord.set(x+","+y, coord.get(x+","+y) + 1 || 1);
                        };
                        break;
                };
                break;
            case false:
                switch (starty < endy) {
                    case true:
                        for (let c=0; c <= Math.abs(startx - endx); c++){
                            let x = startx - c;
                            let y = starty + c;
                            coord.set(x+","+y, coord.get(x+","+y) + 1 || 1);
                        };
                        break;
                    case false:
                        for (let c=0; c <= Math.abs(startx - endx); c++){
                            let x = startx - c;
                            let y = starty - c;
                            coord.set(x+","+y, coord.get(x+","+y) + 1 || 1);
                        };
                        break;
                };
                break;               
        }

    }
})

//get all values of Map
const getValuesOfMapToArray = Array.from(coord.values());
//filter array for values > 1
const valGreaterOne = getValuesOfMapToArray.filter((e) => {return e > 1});
//get count of values > 1
let result = valGreaterOne.length;

// the previous three steps combined in one line
// let result = Array.from(coord.values()).filter((e) => {return e > 1}).length;

console.log (`${result} points have overlaped lines.`);


