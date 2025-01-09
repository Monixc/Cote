const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
const [firstAge, firstGender] = input[0].split(" ");
const [secondAge, secondGender] = input[1].split(" ");

if((Number(firstAge) >= 19 && firstGender === "M") || (Number(secondAge) >= 19 && secondGender === "M")){
    console.log(1);
}else{
    console.log(0);
}