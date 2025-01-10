const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
const [symptom1, temp1] = input[0].split(" ");
const [symptom2, temp2] = input[1].split(" ");
const [symptom3, temp3] = input[2].split(" ");

if (symptom1 === 'Y' && temp1 >= 37) {
    if ((symptom2 === 'Y' && temp2 >= 37) || (symptom3 === 'Y' && temp3 >= 37)) {
        console.log("E");
    } else {
        console.log("N");
    }
} else {
    if ((symptom2 === 'Y' && temp2 >= 37) && (symptom3 === 'Y' && temp3 >= 37)) {
        console.log("E");
    } else {
        console.log("N");
    }
}