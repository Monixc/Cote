let num = require("fs").readFileSync(0).toString().trim().split("-");

const a = num[0];
const b = num[1];;

console.log(a+b);