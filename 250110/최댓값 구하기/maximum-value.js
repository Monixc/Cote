const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ").map(Number);
const [a, b, c] = input;
let max = "";

if(a > b){
    max = a;
}

if(b > c){
    max = b;
}

if(a < c){
    max = c;
}

console.log(max);