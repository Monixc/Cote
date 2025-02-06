const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ").map(Number);
let [a, b] = input;
let prod = 1;

for(let i = a; i <= b; i++){
    prod *= i;
}

console.log(prod);