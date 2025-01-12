const fs = require("fs");
let n = fs.readFileSync(0).toString().trim();
let result = "";
for(let i = n; i <= 100; i++){
    result += (i + " ");
}
console.log(result);