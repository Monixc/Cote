const arr = require("fs").readFileSync(0).toString().split(" ");
const a = Number(arr[0]);
const b = Number(arr[1]);

console.log(a + b);
console.log(a - b);
console.log(parseInt(a / b));
console.log(a % b);