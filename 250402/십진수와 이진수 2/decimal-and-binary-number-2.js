const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const binaryInput = input[0].split('').map(Number);

// Please Write your code here. 
let num = 0;
let digits = [];
let binaryNum = '';

for(let i = 0; i < binaryInput.length; i++){
    
    num = num * 2 + binaryInput[i];
}

num = num * 17;
while(true){
    if(num < 2){
        digits.push(num);
        break;
    }

    digits.push(num%2);
    num = Math.floor(num/2);
}

for(let i = digits.length - 1; i >= 0; i--){
    binaryNum += digits[i];
}

console.log(binaryNum);