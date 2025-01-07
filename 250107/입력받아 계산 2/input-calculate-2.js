const fs = require("fs");
const arr = fs.readFileSync(0).toString().split(" ");

let a = Number(arr[0]);
let b = Number(arr[1]);

console.log(a*b);

