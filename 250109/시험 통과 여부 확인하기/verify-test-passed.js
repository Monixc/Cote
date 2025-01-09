const fs = require("fs");
const input = Number(fs.readFileSync(0).toString());

if(input > 80){
    console.log("pass");
}
else{
    console.log("%d more score", 80 - input);
}
