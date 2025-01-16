const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ").map(Number);
let [a, b] = input;
let result = "";
for(let i = a; i <= b; i++){
    if(i%2===0){
        i += 3;
        result += (i + " ");
    }
    else if(i%2 === 1){
        i *= 2;
        result += (i+ " ");
    }
}
console.log(result);