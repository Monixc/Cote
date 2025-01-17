const fs = require("fs");
let input = Number(fs.readFileSync(0).toString().trim());
let sum = 0;
for(let i = input; i <= 100; i++){
    sum += i;
}

console.log(sum);