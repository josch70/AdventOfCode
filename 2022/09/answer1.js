const path = require("path");
var fs = require("fs");

const inputarray = fs  
    .readFileSync(path.resolve(__dirname, "input.txt"), "utf-8")  
    .split(/\r?\n/)
    // .map(Number);

const head = new Map();
const tail = new Map();
const coH = {x:0,y:0};
const coT = {x:0,y:0};
head.set(coH.x+","+coH.y,1);
tail.set(coT.x+","+coT.y,1);

function setHead(x,y){
    head.set(x+","+y,head.get(x+","+y)+1 || 1);
};
function setTail(x,y){
    tail.set(x+","+y,tail.get(x+","+y)+1 || 1);
};

function setTailCoord(coH, coT){
    if (Math.abs(coH.x - coT.x) == 2 || Math.abs(coH.y - coT.y) == 2){
        if (coH.x > coT.x){
            coT.x += 1;
        }
        else if (coH.x < coT.x){
            coT.x -= 1;
        }
        else {
            // if (coH.y > coT.y){
            //     coT.y += 1;
            // }
            // else {
            //     coT.y -= 1;
            // };
            
        };

        if (coH.y > coT.y){
            coT.y += 1;
        }
        else if (coH.y < coT.y){
            coT.y -= 1;
        }
        else {
            // if (coH.x > coT.x){
            //     coT.x += 1;
            // }
            // else {
            //     coT.x -= 1;
            // };        
        };
        setTail(coT.x, coT.y); 
    };

}


inputarray.forEach(e => {
    const input = e.split(" ");
    let direction = input[0];
    let steps = input[1];
    for (let i=0;i<steps;i++){
        if (direction == "R"){
            coH.x += 1;
            setTailCoord(coH,coT);
        }
        else if (direction == "L"){
            coH.x -= 1;
            setTailCoord(coH,coT);
        }
        else if (direction == "U"){
            coH.y += 1;
            setTailCoord(coH,coT);
        }
        else if (direction == "D"){
            coH.y -= 1;
            setTailCoord(coH,coT);
        };
    setHead(coH.x, coH.y);
    // setTail(coT.x, coT.y);
    };
 
});

console.log(`${tail.size}`)