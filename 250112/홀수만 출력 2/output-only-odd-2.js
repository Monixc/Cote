const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ").map(Number);
const [b, a] = input;
let result = "";
for(let i = b; i >= a; i--){
    if(i % 2 === 1){
        result += (i + " ");
    }
}
console.log(result);