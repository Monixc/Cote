const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ").map(Number);
const [a, b] = input;
let result = "";

for(let i = b; i >= a; i--){
    result += (i + " ");
}

console.log(result);