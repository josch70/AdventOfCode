const path = require("path");
var fs = require("fs");

const inputarray = fs  
    .readFileSync(path.resolve(__dirname, "input.txt"), "utf-8")  
    .split(/\r?\n/)
    // .map(Number);

const map = [];   
let start = {x: 0, y: 0}; //coordinates of start point
let end = {x: 0, y: 0}; //coordinates of end point
let hight = 0; //hight dimension of map
let width = 0; //width dimension of map
const paths = []; //possible paths
const lookArround = [{x: -1, y: 0}, {x: 1, y: 0},{x: 0, y: -1},{x: 0, y: 1}]; //all directions
const done = new Set(); //set to remember visited positions
let finished = false; //true when goal is reached

for (let i of inputarray){
    map.push(i.split(""));
}

//get dimensions of map
hight = map.length-1;
width = map[0].length-1;

//get start and end point and replace the values
for (let y=0;y<hight;y++){
    for (let x=0;x<width;x++){
        if (map[y][x] === "S") {
            map[y][x] = "a";
            start.x = x;
            start.y = y;
        };
        if (map[y][x] === "E") {
            map[y][x] = "z";
            end.x = x;
            end.y = y;
        };

    }
}

paths.push([{x:end.x,y:end.y}]); //initial entry in paths array
done.add(`${end.x},${end.y}`); //remember visited positions

while (paths.length > 0){
    const curPos = paths.shift(); //get first entry of paths array
    let cx = curPos[curPos.length-1].x; //current x coordinate
    let cy = curPos[curPos.length-1].y; //current y coordinate
    for (let a of lookArround){
        let x = cx + a.x;
        let y = cy + a.y;     
        if (x >=0 && x<=width && y >=0 && y<= hight && map[cy][cx].charCodeAt()-map[y][x].charCodeAt()<=1){
            if (!done.has(`${x},${y}`)){
                done.add(`${x},${y}`);
                curPos.push({x, y});
                const ncurPos = curPos.slice();
                paths.push(ncurPos);
                curPos.pop();
                if (map[y][x]=='a'){ //break if new coordinate equals "a"
                    finished = true;
                    break;
                }
            }
        }
    }
    if (finished == true){
        break;
    }
}

console.log (paths[paths.length-1].length-1);

