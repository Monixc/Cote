const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n").map(Number);
let cnt = 0;

for(let i = 0; i < 10; i++){
    if(input[i] % 2 === 1){
        cnt++;
    }
}
console.log(cnt);