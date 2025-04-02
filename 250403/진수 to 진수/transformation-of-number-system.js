const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [a, b] = input[0].split(' ').map(Number);
let n = input[1];
// Please Write your code here.

let digits = n.split('').map(Number);
let num = 0;
let digitsOfB = [];
let binaryNum = '';

//A진수 -> 10진수 변환
for(let i = 0; i < digits.length; i++)
{
    num = num * a + digits[i];
}

//n -> B진수 변환
while(true){
    if(num < b){
        digitsOfB.push(num);
        break;
    }

    digitsOfB.push(num % b);
    num = Math.floor(num / b);
}

for(let i = digitsOfB.length - 1; i >= 0; i--){
    binaryNum += digitsOfB[i];
}

console.log(binaryNum);