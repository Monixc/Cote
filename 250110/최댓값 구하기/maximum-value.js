const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ").map(Number);
const [a, b, c] = input;
let max = "";

if(a > b && a > c){
    max = a;
}
else if(b > a && b > c){
    max = b;
}
else{
    max = c;
}

console.log(max);