const fs = require("fs");
const input = Number(fs.readFileSync(0).toString());

if(input < 5){
    console.log(input*input);
    console.log("tiny");
}
else{
    console.log(input*input);
}