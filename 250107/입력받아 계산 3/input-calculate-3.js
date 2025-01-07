const fs = require("fs");
let arr = fs.readFileSync(0).toString().split("\n");

const a = Number(arr[0]);
const b = Number(arr[1]);

console.log(a * b);