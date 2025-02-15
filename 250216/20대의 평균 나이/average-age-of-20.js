const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n").map(Number);
let res = 0;
let index = 0;

while(true)
{
    
    if(input[index] >= 30 || input[index] < 20){
        break;
    }    

    res += input[index];
    index++;
}

console.log((res/index).toFixed(2));