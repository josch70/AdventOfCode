const path = require("path");
var fs = require("fs");

const inputarray = fs  
    .readFileSync(path.resolve(__dirname, "input.txt"), "utf-8")  
    .split(/\r?\n/)
    // .map(Number);

const head = new Map();
const tail = new Map();
const knots = new Array(10);
for (let i=0;i<knots.length;i++){
    knots[i]={x:0,y:0};
}
// const coH = {x:0,y:0};
// const coT = {x:0,y:0};
head.set(knots[0].x+","+knots[0].y,1);
tail.set(knots[9].x+","+knots[9].y,1);

function setHead(x,y){
    head.set(x+","+y,head.get(x+","+y)+1 || 1);
};
function setTail(x,y){
    tail.set(x+","+y,tail.get(x+","+y)+1 || 1);
};

function setTailCoord(coH, coT, k){
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
        if (k==8){
            setTail(coT.x, coT.y); 
        };
        
    };

}


inputarray.forEach(e => {
    const input = e.split(" ");
    let direction = input[0];
    let steps = input[1];
    for (let i=0;i<steps;i++){
        if (direction == "R"){
            knots[0].x += 1;
            for (let j=0;j<knots.length-1;j++){
                setTailCoord(knots[j],knots[j+1],j);
            };
            
        }
        else if (direction == "L"){
            knots[0].x -= 1;
            for (let j=0;j<knots.length-1;j++){
                setTailCoord(knots[j],knots[j+1],j);
            };
        }
        else if (direction == "U"){
            knots[0].y += 1;
            for (let j=0;j<knots.length-1;j++){
                setTailCoord(knots[j],knots[j+1],j);
            };
        }
        else if (direction == "D"){
            knots[0].y -= 1;
            for (let j=0;j<knots.length-1;j++){
                setTailCoord(knots[j],knots[j+1],j);
            };
        };
    setHead(knots[0].x, knots[0].y);
    // setTail(coT.x, coT.y);
    };
 
});

console.log(`${tail.size}`)