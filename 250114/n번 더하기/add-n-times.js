const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(' ').map(Number);
let [a, n] = input;

for(let i = 0; i < n; i++){
    a += n;
    console.log(a);
}