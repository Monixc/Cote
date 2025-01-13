const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ").map(Number);
let [b, a] = input;
let result = "";
while(b >= a){
    if(b % 2 === 0){
        result += (b + " ");
    }
    b--;
}
console.log(result);