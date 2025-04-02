const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const binaryStr = input[0].split('').map(Number);

// Please Write your code here.
let num = 0;
binaryStr.forEach(bit => {
    num = num * 2 + bit;
})
console.log(num);