const fs = require("fs");
let input = fs.readFileSync(0).toString().split(" ").map(Number);
let [a,b] = input;

let max = a > b ? a : b;

console.log(max);