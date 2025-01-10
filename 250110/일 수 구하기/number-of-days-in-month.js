const fs = require("fs");
let year = Number(fs.readFileSync(0).toString().trim());

if (!((year % 4 == 0 && year % 100 != 0) || year % 400 == 0)) {
    if(year=== 2){
        console.log(28);
    }
    else if(year % 2 === 0 && year !== 8){
        console.log(30);
    }
    else{
        console.log(31);
    }
}
