const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n").map(Number);
let res = "";
for(let i = 0; i < input.length ; i++){
    if(input[i] % 2 === 1){
        continue;
    }
    else if(input[i] % 2 === 0){
        res += (parseInt(input[i] / 2) + "\n");
    }
}
console.log(res);