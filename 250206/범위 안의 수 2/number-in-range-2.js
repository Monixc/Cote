const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n").map(Number);
let sum = 0;
let cnt = 0;

for(let i = 0; i <= 9; i++){
    if(input[i] >= 0 && input[i] <= 200){
        sum += input[i];
        cnt++;
    }
}

console.log("%d %d", sum, (sum/cnt).toFixed(1));