const path = require("path");
var fs = require("fs");

const inputarray = fs  
    .readFileSync(path.resolve(__dirname, "input.txt"), "utf-8")  
    .split(/\r?\n/)
    // .map(Number);

const signalStrengthCycles = [20,60,100,140,180,220];
let xe = 1;
let xd = 1;
let c = 0;
const reg = [];
let sigStr = 0;

inputarray.forEach(e => {
    if (e == 'noop') {
        c +=1;
        if (signalStrengthCycles.includes(c)){
            sigStr += c*xd;
        }
        reg.push({c:c,v:e,xd:xd, xe:xd});
    }
    else {
        let v = parseInt(e.split(" ")[1]);
        for (let i=0; i<2;i++) {
            c +=1;
            if (signalStrengthCycles.includes(c)){
                sigStr += c*xd;
            }
            if (i==0){
                reg.push({c:c,v:v,xd:xd, xe:xd});
            } else {
                xe = xe+v;
                reg.push({c:c,v:v,xd:xd, xe:xe});
                xd = xe;
            };
        };
    };

});

let y = 40 % 1;
let o = 1;
let row = "";
reg.forEach((e,i) => {
    if (e.c-o == e.xd || e.c-o == e.xd-1 || e.c-o == e.xd+1){
        row += "#";
    } else {
        row += ".";
    };
    if ((i+1)%40 == 0){
        console.log(row);
        row = "";
        o += 40;
    }
});





