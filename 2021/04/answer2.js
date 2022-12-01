const path = require("path");
var fs = require("fs");

const inputarray = fs
    .readFileSync(path.resolve(__dirname, "input.txt"), "utf-8")
    .split('\n')
    // .map(Number);

//Sort array
inputarray.sort();

//Copy array for oxygen processing
const oxygen = inputarray.slice();

let p = '^1'; //search pattern for regex
let re = new RegExp(p); //create regex search pattern
let i = 0; //variable for index used by findIndex

//loop until only 1 bit number remains
while (oxygen.length > 1) {

    i = oxygen.findIndex(v => re.test(v)) //search in array with regex pattern

    //if returned index is smaller/equal then array length then remove all bit numbers with 0 at the nth position
    if (i*2 <= oxygen.length){
        oxygen.splice(0,i); // removes bit numbers
        p = p.replace(/.$/,'11') // modify search pattern for next loop run
    }
    //if returned index is greater then array length then remove all bit numbers with 1 at the nth position
    else {
        //save bits with 0
        oxygen.splice(i,oxygen.length-i); // removes bit numbers
        // p = p+'0';
        p = p.replace(/.$/,'01') // modify search pattern for next loop run
    }
   
    re = new RegExp(p);
}


//following code for co2 processing is the same like for oxygen above but if condition using ">" because we are searching for least common value
const co2 = inputarray.slice();

p = '^1';
re = new RegExp(p);
i = 0;
l = co2.length;
while (co2.length > 1) {

    i = co2.findIndex(v => re.test(v))
    if (i*2 > co2.length){
        
        co2.splice(0,i);
        p = p.replace(/.$/,'11')
    }
    else {
        
        co2.splice(i,co2.length-i);
        // p = p+'0';
        p = p.replace(/.$/,'01')
    }
   
    re = new RegExp(p);
}


console.log("Oxygen rate(binary): " + oxygen);
console.log("Oxygen rate(decimal): " + parseInt(oxygen,2));
console.log("CO2 rate(binary): " + co2);
console.log("CO2 rate(decimal): " + parseInt(co2,2));
console.log("Result(life support rate): " + parseInt(oxygen,2) * parseInt(co2,2));





