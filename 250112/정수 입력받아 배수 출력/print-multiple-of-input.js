const fs = require("fs");
let n = fs.readFileSync(0).toString().trim();
let result = "";

for(let i = 1; i <= 5; i++){
    result += (n*i + " ");
}

console.log(result);