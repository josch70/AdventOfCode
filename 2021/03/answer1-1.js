const path = require("path");
var fs = require("fs");
//[count of 0 from bit 1, count of 1 from bit 1, count of 0 from bit2, count of 1 from bit2, .........]
const bitCount = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
//const gamma_rate = [];
let gamma_rate = "";
//const epsilon_rate = [];
let epsilon_rate = "";

const inputarray = fs
    // .readFileSync("input03.txt", "utf-8")
    // .readFileSync("C:\\Users\\A301037\\OneDrive - Deutsche Telekom AG\\Daten2\\Entwicklung\\aoc-2022\\examples\\2021_day03\\Dill_Joachim\\input03.txt", "utf-8")    
    .readFileSync(path.resolve(__dirname, "input.txt"), "utf-8")  
    .split('\n')
    // .map(Number);

for (let i = 0; i < inputarray.length; i++) {
    //input to array
    const input = inputarray[i].split("");
    //for every bit increase corresponding value in bitCount array.
    for (let j = 0; j < input.length; j++) {
        switch(input[j]){
            case "0":
                bitCount[j+j]+=1;
                break;
            case "1":
                bitCount[j+j+1]+=1;
                break;

        }
    }
    
}
console.log(bitCount);
for (let i = 0; i < bitCount.length; i+=2) {
    if (bitCount[i] > bitCount[i+1]) {
        gamma_rate += 0;
        epsilon_rate += 1;
    }
    else {
        gamma_rate += 1;
        epsilon_rate += 0;
    }
}

console.log("gamma rate(binary): " + gamma_rate);
console.log("gamma rate(decimal): " + parseInt(gamma_rate,2));
console.log("epsilon rate(binary): " + epsilon_rate);
console.log("epsilon rate(decimal): " + parseInt(epsilon_rate,2));
console.log("Result(power consumption): " + parseInt(gamma_rate,2) * parseInt(epsilon_rate,2));
