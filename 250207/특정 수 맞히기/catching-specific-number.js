const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n").map(Number);
let index = 0;

while(true){
    if(input[index] < 25){
        console.log("Higher")
    }
    else if(input[index] > 25){
        console.log("Lower");
    }
    else if(input[index] === 25){
        console.log("Good");
        break;
    }

    index++;
}