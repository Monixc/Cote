const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ").map(Number);
const [middle, final] = input;

if(middle >= 90 && final >= 95){
    console.log(100000);
}else if(middle >= 90 && final >= 90){
    console.log(50000);
}else{
    console.log(0);
}