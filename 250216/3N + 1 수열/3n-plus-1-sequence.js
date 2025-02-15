const fs = require("fs");
let N = Number(fs.readFileSync(0).toString().trim());
let cnt = 0;

while(true){
    if(N % 2 === 0){
        N /= 2;
        cnt++;
    }
    else if(N % 2 === 1){
        N = N * 3 + 1;
        cnt++;
    }
    
    if(N === 1){
        console.log(cnt);
        break;
    }
    
}