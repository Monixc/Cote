const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
let [n, b] = input[0].split(' ').map(Number);

// Please Write your code here.
let digits = [];

while(true){
    if(n < b){
        digits.push(n);
        break;
    }

    digits.push(n % b);
    n = Math.floor(n / b);
}

let converted  = '';
for(let i = digits.length - 1; i >= 0; i--){
    converted += digits[i];
}

console.log(converted);