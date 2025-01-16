const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n").map(Number);
let cnt1 = 0; 
let cnt2 = 0;

for(let i = 0; i < 10; i++){
    if(input[i] % 3 == 0){
        cnt1++;
    }
    if(input[i] % 5 === 0){
        cnt2++;
    }
}
console.log("%d %d", cnt1, cnt2);
