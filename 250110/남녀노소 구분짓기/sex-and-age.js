const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n").map(Number);
const [gender, age] = input;

if(age >= 19){
    if(gender === 0) console.log("MAN");
    else if(gender === 1) console.log("WOMAN");
}else{
    if(gender === 0)console.log("BOY");
    else if(gender === 1) console.log("GIRL");
}