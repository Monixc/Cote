const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n").map(Number);
let n = input[0];
let sum = 0;

for(let i = 1; i <= n; i++){
    if(input[i] % 2 === 1 && input[i] % 3 === 0){
        sum += input[i];
    }
}
console.log(sum);