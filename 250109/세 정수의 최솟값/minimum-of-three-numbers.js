const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ").map(Number);
let [a, b, c] = input;
let min = a;

if(min > b){
    min = b;
}

if(min > c){
    min = c;
}

console.log(min);