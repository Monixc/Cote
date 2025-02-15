const fs = require("fs");
let N = Number(fs.readFileSync(0).toString().trim());
let x = 1;
while(true){
    if(2**x === N) break;
    x++;
}
console.log(x);