const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ").map(Number);
let [a, b] = input;
let result = '';
if(a > 0){
    for(let i = 0; i < b; i++){
        result += a;
    }
    console.log(result);
}
else{
    console.log(0);
}