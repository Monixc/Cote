const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let [am, ae] = input[0].split(" ").map(Number);
let [bm, be] = input[1].split(" ").map(Number);

if(am > bm && ae > be){
    console.log(1);
}else{
    console.log(0);
}

