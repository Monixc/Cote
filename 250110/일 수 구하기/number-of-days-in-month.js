const fs = require("fs");
let year = Number(fs.readFileSync(0).toString().trim());

if (year === 2) {
    console.log(28);
}
else if (year <= 7) {
    if (year % 2 === 1) {
        console.log(31);
    }
    else {
        console.log(30);
    }
}
else {
    if (year % 2 === 0) {
        console.log(31);
    }
    else {
        console.log(30);
    }
}