const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const binaryStr = input[0];

// Please Write your code here.

for(let i = 0; i < binaryStr.length; i++){
    num = num * 2 + binar[i];
}

console.log(num);