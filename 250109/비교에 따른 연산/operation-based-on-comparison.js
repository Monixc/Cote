const fs = require("fs");
let input = fs.readFileSync(0).toString().split(" ").map(Number);
let [a, b] = input;

if(a>b){
    console.log(a*b);
}
else{
    console.log(parseInt(b/a));
}