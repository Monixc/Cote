const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
let res = '';

for(let i = 0; i < input.length; i++){
    let [w, h, s] = input[i].trim().split(" ");
    res += (w * h + "\n");
    if(s === 'C'){
        break;
    }
}
console.log(res);