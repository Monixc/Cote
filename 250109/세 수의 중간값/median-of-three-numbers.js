const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ").map(Number);
const [a, b, c] = input;

if(b > a && b < c){
    console.log(1);
}else{
    console.log(0);
}