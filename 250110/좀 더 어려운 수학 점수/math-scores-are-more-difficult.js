const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
const [am, ae] = input[0].split(" ").map(Number);
const [bm, be] = input[1].split(" ").map(Number);

if(am > bm || (am === bm && ae > be)){
    console.log("A");
}else{
    console.log("B");
}
