const fs = require("fs");
let N = Number(fs.readFileSync(0).toString().trim());
let cnt = 0;

while(true){
    
    if(N === 1) break;
    
    if(N % 2 === 0){
        N /= 2;
    }
    else if(N % 2 === 1){
        N = N * 3 + 1;
    }
    cnt++;
}
console.log(cnt);