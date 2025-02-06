const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());
let arr = [];
let sum = 0; 
for(let i = 0; i <= n; i++){
    if(i % 2 === 0){
        arr.push(i);
    }
}

for(let j = 0; j < arr.length; j++){
    sum += j;
}

if(sum ===  n){
    console.log("P");
}
else{
    console.log("N");
}