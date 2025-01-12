const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ").map(Number);
const [a, b] = input;
let result = "";
for(let i = a; i <= b; i++){
    if(i % 2 === 1){
        result += (i + " ");
    }
}
console.log(result);