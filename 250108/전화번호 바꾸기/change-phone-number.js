let phoneNum = require("fs").readFileSync(0).toString().trim().split("-");

const a = phoneNum[0];
const b = phoneNum[1];
const c = phoneNum[2];

console.log(a + "-" + c + "-" + b);